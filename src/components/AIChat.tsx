"use client";
import { useState, useRef, useEffect, useCallback } from 'react';
import styles from '../app/HomePage.module.css';
import { IoClose } from "react-icons/io5";
import { FaMicrophone, FaMicrophoneSlash, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your AI assistant. I can help you learn more about superdev's skills, projects, and services. What would you like to know?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [showPermissionGuide, setShowPermissionGuide] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthesisRef = useRef<SpeechSynthesis | null>(null);
  const isMountedRef = useRef(true);

  const speakMessage = useCallback((text: string) => {
    if (!synthesisRef.current) return;

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onstart = () => {
        if (isMountedRef.current) {
          setIsSpeaking(true);
        }
      };
      utterance.onend = () => {
        if (isMountedRef.current) {
          setIsSpeaking(false);
        }
      };
      utterance.onerror = () => {
        if (isMountedRef.current) {
          setIsSpeaking(false);
        }
      };
      synthesisRef.current.speak(utterance);
    } catch {
      console.error('Error speaking message');
      setIsSpeaking(false);
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent, voiceInput?: string) => {
    e.preventDefault();
    const messageToSend = voiceInput || input.trim();
    if (!messageToSend) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await response.json();
      
      if (response.ok) {
        const assistantMessage = { role: 'assistant' as const, content: data.message };
        setMessages(prev => [...prev, assistantMessage]);
        if (isSpeaking) {
          speakMessage(data.message);
        }
      } else {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I apologize, but I'm having trouble processing your request right now. Please try again later." 
        }]);
      }
    } catch {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I apologize, but I'm having trouble connecting right now. Please try again later." 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isSpeaking, speakMessage]);

  // Initialize speech recognition
  useEffect(() => {
    isMountedRef.current = true;

    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          if (!isMountedRef.current) return;
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSubmit(new Event('submit') as unknown as React.FormEvent<HTMLFormElement>);
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          if (!isMountedRef.current) return;
          console.error('Speech recognition error:', event.error);
          setIsListening(false);
          
          if (event.error === 'not-allowed') {
            setPermissionError('Microphone access was denied. Click here to learn how to enable it.');
            setShowPermissionGuide(true);
          } else if (event.error === 'no-speech') {
            setPermissionError('No speech was detected. Please try speaking again.');
          } else if (event.error === 'audio-capture') {
            setPermissionError('No microphone was found. Please ensure your microphone is properly connected.');
          } else {
            setPermissionError('An error occurred with speech recognition. Please try again.');
          }
        };

        recognition.onend = () => {
          if (!isMountedRef.current) return;
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }

      synthesisRef.current = window.speechSynthesis;
    }

    // Cleanup function
    return () => {
      isMountedRef.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          console.error('Error stopping recognition');
        }
      }
      if (synthesisRef.current) {
        try {
          synthesisRef.current.cancel();
        } catch {
          console.error('Error canceling synthesis');
        }
      }
    };
  }, [handleSubmit]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const toggleSpeech = () => {
    if (!synthesisRef.current) return;

    if (isSpeaking) {
      try {
        synthesisRef.current.cancel();
        setIsSpeaking(false);
      } catch (error) {
        console.error('Error stopping speech:', error);
      }
    } else {
      const lastMessage = messages[messages.length - 1];
      if (lastMessage && lastMessage.role === 'assistant') {
        speakMessage(lastMessage.content);
      }
    }
  };

  const toggleListening = async () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
    } else {
      try {
        // Request microphone permission explicitly
        const permission = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        
        if (permission.state === 'denied') {
          setPermissionError('Microphone access was denied. Click here to learn how to enable it.');
          setShowPermissionGuide(true);
          return;
        }

        setPermissionError(null);
        setShowPermissionGuide(false);
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error starting speech recognition:', error);
        setIsListening(false);
        setPermissionError('Failed to access microphone. Click here to learn how to enable it.');
        setShowPermissionGuide(true);
      }
    }
  };

  const handlePermissionGuideClick = () => {
    setShowPermissionGuide(true);
  };

  const closePermissionGuide = () => {
    setShowPermissionGuide(false);
    setPermissionError(null);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.aiChatOverlay}>
      <div ref={chatRef} className={styles.aiChat}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close chat"
        >
          <IoClose size={24} />
        </button>
        <div className={styles.chatMessages}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${styles.message} ${styles[message.role]}`}
            >
              {message.content}
            </div>
          ))}
          {isLoading && (
            <div className={`${styles.message} ${styles.assistant}`}>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          {permissionError && (
            <div 
              className={`${styles.message} ${styles.error} ${styles.clickable}`}
              onClick={handlePermissionGuideClick}
            >
              {permissionError}
            </div>
          )}
          {showPermissionGuide && (
            <div className={styles.permissionGuide}>
              <h4>Microphone Access Required</h4>
              <p>To use voice features, please allow microphone access:</p>
              <ol>
                <li>Click the lock/info icon in your browser&apos;s address bar</li>
                <li>Find &quot;Microphone&quot; in the permissions list</li>
                <li>Change the setting to &quot;Allow&quot;</li>
                <li>Refresh the page</li>
              </ol>
              <button 
                className={styles.closeGuideButton}
                onClick={closePermissionGuide}
              >
                Got it
              </button>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className={styles.chatInput}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            disabled={isLoading}
          />
          <button 
            type="button" 
            className={`${styles.voiceButton} ${isListening ? styles.active : ''}`}
            onClick={toggleListening}
            disabled={isLoading}
            aria-label={isListening ? "Stop listening" : "Start listening"}
            title={isListening ? "Stop listening" : "Start listening"}
          >
            {isListening ? <FaMicrophoneSlash size={20} /> : <FaMicrophone size={20} />}
          </button>
          <button 
            type="button" 
            className={`${styles.voiceButton} ${isSpeaking ? styles.active : ''}`}
            onClick={toggleSpeech}
            disabled={isLoading}
            aria-label={isSpeaking ? "Stop speaking" : "Start speaking"}
            title={isSpeaking ? "Stop speaking" : "Start speaking"}
          >
            {isSpeaking ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
          </button>
          <button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            title="Send message"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
} 