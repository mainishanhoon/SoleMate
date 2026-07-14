'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from '@/components/ui/message-scroller';
import { Message, MessageContent } from '@/components/ui/message';
import { Bubble, BubbleContent } from '@/components/ui/bubble';
import {
  Basketball,
  ChatLine,
  CloseSquare,
  MapArrowRight,
} from '@solar-icons/react-perf/BoldDuotone';
import { useFetcher } from 'react-router';
import type { AIResponse } from '@/routes/products/chat';
import { TextShimmer } from '@/components/TextShimmer';

interface ChatMessage {
  id: string;
  text: string;
  role: 'user' | 'assistant';
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');

  const fetcher = useFetcher<AIResponse>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isSubmitting = fetcher.state !== 'idle';

  useEffect(() => {
    if (fetcher.state === 'idle' && fetcher.data) {
      if (fetcher.data.response) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            text: fetcher.data!.response!,
            role: 'assistant',
          },
        ]);
      } else if (fetcher.data.error) {
        setMessages((prev) => [
          ...prev,
          {
            id: `err-${Date.now()}`,
            text: fetcher.data!.error!.message,
            role: 'assistant',
          },
        ]);
      }
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [fetcher.state, fetcher.data]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isSubmitting) return;

    // 1. User message instantly screen par
    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, text: trimmed, role: 'user' },
    ]);
    setInput('');

    // 2. Pure Form data generate kiya
    const formData = new FormData();
    formData.append('message', trimmed);

    fetcher.submit(formData, { method: 'POST', action: '/products/chat' });

    setTimeout(
      () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }),
      50,
    );
  };

  return (
    <section>
      <ChatLine
        onClick={() => setIsOpen(!isOpen)}
        className="text-accent bg-foreground fixed right-5 bottom-5 z-50 cursor-pointer p-1"
        aria-label="Toggle chat"
        size={50}
      />

      {isOpen && (
        <div className="border-border font-bricolage bg-muted animate-in fade-in slide-in-from-bottom-2 fixed right-5 bottom-20 z-50 flex h-[500px] w-96 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border shadow-lg duration-300">
          <div className="bg-foreground text-background flex shrink-0 items-center justify-between p-4">
            <h3 className="flex items-center gap-2 text-base font-semibold">
              <Basketball size={35} /> SoleMate AI Assistant
            </h3>
            <CloseSquare
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
              size={25}
            />
          </div>

          <MessageScrollerProvider>
            <MessageScroller className="bg-muted/30 flex-1">
              <MessageScrollerViewport>
                <MessageScrollerContent>
                  {messages.length === 0 ? (
                    <div className="text-muted-foreground flex h-full items-center justify-center p-4 text-center text-sm">
                      <p>
                        Ask me anything about shoes, sizes, or recommendations.
                      </p>
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <MessageScrollerItem
                        key={msg.id}
                        scrollAnchor={
                          msg.id === messages[messages.length - 1]?.id
                        }
                        className="p-2"
                      >
                        <Message align={msg.role === 'user' ? 'end' : 'start'}>
                          <MessageContent>
                            <Bubble variant="default">
                              <BubbleContent>{msg.text}</BubbleContent>
                            </Bubble>
                          </MessageContent>
                        </Message>
                      </MessageScrollerItem>
                    ))
                  )}

                  {isSubmitting && (
                    <MessageScrollerItem scrollAnchor>
                      <Message align="start">
                        <MessageContent className="p-2">
                          <Bubble variant="outline">
                            <BubbleContent>
                              <TextShimmer duration={1}>
                                SoleMate is Thinking...
                              </TextShimmer>
                            </BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  )}

                  <div ref={messagesEndRef} />
                </MessageScrollerContent>
              </MessageScrollerViewport>
            </MessageScroller>
          </MessageScrollerProvider>

          <form
            onSubmit={handleSendMessage}
            className="border-border bg-background flex shrink-0 gap-2 border-t p-3"
          >
            <Input
              type="text"
              aria-label="query"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about shoes, sizes..."
              className="flex-1"
              disabled={isSubmitting}
              autoFocus
            />
            <Button
              type="submit"
              disabled={isSubmitting || !input.trim()}
              variant="default"
              className="cursor-pointer"
            >
              <MapArrowRight size={35} />
            </Button>
          </form>
        </div>
      )}
    </section>
  );
}
