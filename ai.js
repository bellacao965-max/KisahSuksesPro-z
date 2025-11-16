async function sendToAI(prompt, model='') {
  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ prompt, model })
    });
    return res.json();
  } catch(e) {
    return { error: e.message || 'Network error' };
  }
}

async function fetchQuote() {
  try {
    const r = await fetch('/api/quote');
    const d = await r.json();
    return d.quote;
  } catch(e) {
    return 'Tidak dapat mengambil quote sekarang.';
  }
}

// Simple chat history stored in localStorage
function saveChatHistory(history) {
  try { localStorage.setItem('chat_history', JSON.stringify(history)); } catch(e){}
}
function loadChatHistory() {
  try { return JSON.parse(localStorage.getItem('chat_history')||'[]'); } catch(e){ return []; }
}
