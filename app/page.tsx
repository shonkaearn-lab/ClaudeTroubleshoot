'use client';

import { useState } from 'react';

const msgs = [
  "It's your context read. Start fresh conversations instead of continuing long ones.",
  'Context window overloaded? Start a new chat.',
  'Your conversation got too long. New chat = reset.',
  'Context limit hit. Fresh conversation fixes it.',
  'Too much context. Begin again with a clean slate.',
  'Long conversation = context bloat. Start fresh.',
  'Context read exceeded. Create a new conversation.',
  'Conversation too deep? Clear it and restart.',
  'Context overflow detected. New conversation needed.',
  'Your chat history is too dense. Start over.',
  'Long threads cause context issues. Try a fresh one.',
  'Context saturation reached. Begin a new chat.',
  'Tired responses? Context buildup. Start fresh.',
  'Conversation length affects performance. New chat helps.',
  'Context window full. Clean slate required.',
  'Your thread is too long. New conversation fixes this.',
  'Accumulated context slowing things down? Restart.',
  'Context chains cause degradation. Fresh start works.',
  'Long conversation history = context strain. Begin anew.',
  "Can't process right? Context read is the culprit.",
  'Weird behavior in old chats? Context issue. New one.',
  'Responses getting worse? Long context is the reason.',
  'Chat history bloated? Fresh conversation resets it.',
  'Context creep. New chat = clean slate.',
  'Old chats gather context noise. Start fresh.',
  'Long chains break context understanding. New chat fixes.',
  'Context pollution from long threads. Restart.',
  'Conversation too verbose? Context read limit hit.',
  'Context depth issues require fresh start.',
  'Long message chains degrade context. Try new chat.',
  'Context window filling up. Time for a new conversation.',
  'Accumulated message history strains context. Reset.',
  'Context gets diluted in long chats. Begin again.',
  'Your chat grew too complex. New one fixes it.',
  'Context overload from long threads. Fresh chat needed.',
  'Too many back-and-forths? Context building up. Restart.',
  'Conversation context got thick. Clear it out.',
  'Long chat history = context degradation. New chat.',
  'Context saturation in lengthy threads. Start over.',
  'Messages piling up affect context. New conversation.',
  'Context read full from long chat. Begin fresh.',
  'Thread length reducing context quality. New chat helps.',
  'Long conversations dilute context. Fresh start better.',
  'Context capacity reached. New chat resets it.',
  'Prolonged chats reduce context effectiveness. Restart.',
  'Context window strained by long history. New start.',
  'Old threads accumulate context debt. Fresh chat clears.',
  'Context gets muddied in long conversations. Begin anew.',
  'Long message history fills context. New chat needed.',
  'Context degradation from conversation length. Try fresh.',
  'Lengthy threads strain your context window. Restart.',
  "Your chat's too old. Context has decayed. New one.",
  'Context gets fragmented over long chats. Start clean.',
  'Long conversation history exhausts context. Begin again.',
  'Context performance drops in lengthy threads. Reset.',
  'Your message chain is too long. New chat fixes.',
  'Context gets tangled in deep threads. Fresh start.',
  'Long chats lead to context fatigue. Restart.',
  'Conversation too extended. Context needs reset.',
  'Context deteriorates over long message chains.',
  'Deep threads cause context issues. New chat helps.',
  'Message history too thick. Context read exceeded.',
  'Long conversation = context overload. Start fresh.',
  'Context window clogged by long threads. Clear it.',
  'Your chat history is context-dense. New chat.',
  'Extended conversations drain context. Try fresh one.',
  'Context buildup in lengthy chats. Restart helps.',
  'Long message streams exhaust context. Begin new.',
  'Context capacity full. New conversation needed.',
  'Old chat = old context. Fresh one better.',
  'Context gets overwhelmed by long threads. Reset.',
  'Prolonged chats reduce context clarity. Start over.',
  'Context strains under long message history. Try new.',
  'Long conversation history burdens context. Fresh chat.',
  'Context degrades with conversation length.',
  'Lengthier chats = context degradation. New helps.',
  'Your thread got context-heavy. New conversation.',
  'Context window filled by long history. Restart.',
  'Message chains strain context. New chat fixes.',
  'Long chats accumulate context issues. Begin fresh.',
  'Context fatigue from lengthy threads. Reset now.',
  'Deep conversations overload context. New start.',
  'Context read overflowed in long chat. Try new.',
  'Long thread = context burden. Fresh chat.',
  'Conversation length broke your context. Start over.',
  'Context gets dense in extended chats. Begin anew.',
  'Thick message history exhausts context. New chat.',
  'Long chats degrade context quality. Try fresh.',
  'Context window full from long conversation. Reset.',
  'Your chat got context-heavy. New one helps.',
  'Extended message history strains context. Restart.',
  'Context issues from lengthy chats. Fresh start.',
  'Long conversation history needs reset. Begin new.',
  'Context capacity exceeded. New chat required.',
  'Old chats accumulate context. Fresh one clears it.',
  'Context overload detected in your thread. Restart.',
  'Message history too long. Context affected. New chat.',
];

export default function Home() {
  const [inp, setInp] = useState('');
  const [res, setRes] = useState('');
  const [show, setShow] = useState(false);

  const troubleshoot = () => {
    const m = msgs[Math.floor(Math.random() * msgs.length)];
    setRes(m);
    setShow(true);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') troubleshoot();
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={{ maxWidth: '600px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', fontWeight: '600' }}>
          Claude Troubleshoot
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Describe your Claude issue..."
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            onKeyDown={handleKey}
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              fontSize: '16px',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          onClick={troubleshoot}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Troubleshoot
        </button>

        {show && (
          <div
            style={{
              marginTop: '30px',
              padding: '20px',
              border: '1px solid #000',
              backgroundColor: '#f5f5f5',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p style={{ margin: '0', lineHeight: '1.6', fontSize: '16px' }}>
              {res}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
