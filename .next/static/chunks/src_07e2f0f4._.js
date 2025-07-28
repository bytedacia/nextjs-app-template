(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/context/notesContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NotesProvider": (()=>NotesProvider),
    "useNotes": (()=>useNotes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const NotesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NotesProvider({ children }) {
    _s();
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Carica le note dal localStorage al mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotesProvider.useEffect": ()=>{
            try {
                const savedNotes = localStorage.getItem('anime-notes');
                if (savedNotes) {
                    const parsedNotes = JSON.parse(savedNotes).map({
                        "NotesProvider.useEffect.parsedNotes": (note)=>({
                                ...note,
                                createdAt: new Date(note.createdAt),
                                updatedAt: new Date(note.updatedAt)
                            })
                    }["NotesProvider.useEffect.parsedNotes"]);
                    setNotes(parsedNotes);
                }
            } catch (error) {
                console.error('Errore nel caricamento delle note:', error);
            }
        }
    }["NotesProvider.useEffect"], []);
    // Salva le note nel localStorage quando cambiano
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotesProvider.useEffect": ()=>{
            try {
                localStorage.setItem('anime-notes', JSON.stringify(notes));
            } catch (error) {
                console.error('Errore nel salvataggio delle note:', error);
            }
        }
    }["NotesProvider.useEffect"], [
        notes
    ]);
    const addNote = (noteData)=>{
        const newNote = {
            ...noteData,
            id: Date.now().toString(),
            createdAt: new Date(),
            updatedAt: new Date()
        };
        setNotes((prev)=>[
                newNote,
                ...prev
            ]);
    };
    const updateNote = (id, noteData)=>{
        setNotes((prev)=>prev.map((note)=>note.id === id ? {
                    ...note,
                    ...noteData,
                    updatedAt: new Date()
                } : note));
    };
    const deleteNote = (id)=>{
        setNotes((prev)=>prev.filter((note)=>note.id !== id));
    };
    const getNote = (id)=>{
        return notes.find((note)=>note.id === id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotesContext.Provider, {
        value: {
            notes,
            addNote,
            updateNote,
            deleteNote,
            getNote
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/notesContext.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(NotesProvider, "eI97U74WWn7LZv8elnKHdI/J0uk=");
_c = NotesProvider;
function useNotes() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotesContext);
    if (context === undefined) {
        throw new Error('useNotes deve essere usato all\'interno di un NotesProvider');
    }
    return context;
}
_s1(useNotes, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NotesProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/animeContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimeProvider": (()=>AnimeProvider),
    "useAnime": (()=>useAnime)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const AnimeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AnimeProvider({ children }) {
    _s();
    const [animes, setAnimes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [watchlist, setWatchlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Carica i dati dal localStorage al mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimeProvider.useEffect": ()=>{
            try {
                const savedAnimes = localStorage.getItem('anime-notes-animes');
                const savedWatchlist = localStorage.getItem('anime-notes-watchlist');
                if (savedAnimes) {
                    const parsedAnimes = JSON.parse(savedAnimes).map({
                        "AnimeProvider.useEffect.parsedAnimes": (anime)=>({
                                ...anime,
                                addedAt: new Date(anime.addedAt),
                                updatedAt: new Date(anime.updatedAt),
                                scheduledDate: anime.scheduledDate ? new Date(anime.scheduledDate) : undefined
                            })
                    }["AnimeProvider.useEffect.parsedAnimes"]);
                    setAnimes(parsedAnimes);
                }
                if (savedWatchlist) {
                    const parsedWatchlist = JSON.parse(savedWatchlist).map({
                        "AnimeProvider.useEffect.parsedWatchlist": (item)=>({
                                ...item,
                                scheduledDate: new Date(item.scheduledDate)
                            })
                    }["AnimeProvider.useEffect.parsedWatchlist"]);
                    setWatchlist(parsedWatchlist);
                }
            } catch (error) {
                console.error('Errore nel caricamento dei dati anime:', error);
            }
        }
    }["AnimeProvider.useEffect"], []);
    // Salva i dati nel localStorage quando cambiano
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimeProvider.useEffect": ()=>{
            try {
                localStorage.setItem('anime-notes-animes', JSON.stringify(animes));
            } catch (error) {
                console.error('Errore nel salvataggio degli anime:', error);
            }
        }
    }["AnimeProvider.useEffect"], [
        animes
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimeProvider.useEffect": ()=>{
            try {
                localStorage.setItem('anime-notes-watchlist', JSON.stringify(watchlist));
            } catch (error) {
                console.error('Errore nel salvataggio della watchlist:', error);
            }
        }
    }["AnimeProvider.useEffect"], [
        watchlist
    ]);
    const addAnime = (animeData)=>{
        const newAnime = {
            ...animeData,
            id: Date.now().toString(),
            addedAt: new Date(),
            updatedAt: new Date()
        };
        setAnimes((prev)=>[
                newAnime,
                ...prev
            ]);
    };
    const updateAnime = (id, animeData)=>{
        setAnimes((prev)=>prev.map((anime)=>anime.id === id ? {
                    ...anime,
                    ...animeData,
                    updatedAt: new Date()
                } : anime));
    };
    const deleteAnime = (id)=>{
        setAnimes((prev)=>prev.filter((anime)=>anime.id !== id));
        // Rimuovi anche dalla watchlist
        setWatchlist((prev)=>prev.filter((item)=>item.animeId !== id));
    };
    const getAnime = (id)=>{
        return animes.find((anime)=>anime.id === id);
    };
    const addToWatchlist = (itemData)=>{
        const newItem = {
            ...itemData,
            id: Date.now().toString()
        };
        setWatchlist((prev)=>[
                newItem,
                ...prev
            ]);
    };
    const updateWatchlistItem = (id, itemData)=>{
        setWatchlist((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    ...itemData
                } : item));
    };
    const removeFromWatchlist = (id)=>{
        setWatchlist((prev)=>prev.filter((item)=>item.id !== id));
    };
    const getAnimesByStatus = (status)=>{
        return animes.filter((anime)=>anime.status === status);
    };
    const getTopRatedAnimes = (limit = 10)=>{
        return animes.filter((anime)=>anime.rating !== undefined).sort((a, b)=>(b.rating || 0) - (a.rating || 0)).slice(0, limit);
    };
    const getScheduledAnimes = (date)=>{
        const targetDate = new Date(date);
        targetDate.setHours(0, 0, 0, 0);
        return animes.filter((anime)=>{
            if (!anime.scheduledDate) return false;
            const animeDate = new Date(anime.scheduledDate);
            animeDate.setHours(0, 0, 0, 0);
            return animeDate.getTime() === targetDate.getTime();
        }).map((anime)=>({
                ...anime,
                scheduledDate: anime.scheduledDate
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimeContext.Provider, {
        value: {
            animes,
            watchlist,
            addAnime,
            updateAnime,
            deleteAnime,
            getAnime,
            addToWatchlist,
            updateWatchlistItem,
            removeFromWatchlist,
            getAnimesByStatus,
            getTopRatedAnimes,
            getScheduledAnimes
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/animeContext.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_s(AnimeProvider, "sxJrdoPcJ9+heBVmAOCGh2510dg=");
_c = AnimeProvider;
function useAnime() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AnimeContext);
    if (context === undefined) {
        throw new Error('useAnime deve essere usato all\'interno di un AnimeProvider');
    }
    return context;
}
_s1(useAnime, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AnimeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/gemini.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Integrazione con Google Gemini API per ricerche anime e analisi
__turbopack_context__.s({
    "analyzeAnimeForRating": (()=>analyzeAnimeForRating),
    "getAnimeRecommendations": (()=>getAnimeRecommendations),
    "getCurrentGeminiApiKey": (()=>getCurrentGeminiApiKey),
    "saveGeminiApiKey": (()=>saveGeminiApiKey),
    "searchAnimeInfo": (()=>searchAnimeInfo),
    "searchAnimeNews": (()=>searchAnimeNews)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Funzione per ottenere la chiave API Gemini
function getGeminiApiKey() {
    if ("TURBOPACK compile-time truthy", 1) {
        const apiKey = localStorage.getItem('gemini-api-key');
        if (apiKey) return apiKey;
    }
    return ("TURBOPACK compile-time value", "AIzaSyBbLv8K67gsVWmMyzGHfvfQdQ7tGf7vIbA") || '';
}
// Chiamata all'API Gemini
async function callGeminiAPI(prompt, apiKey) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024
                }
            })
        });
        if (!response.ok) {
            throw new Error(`Errore API Gemini: ${response.status}`);
        }
        const data = await response.json();
        return data.candidates[0]?.content?.parts[0]?.text || '';
    } catch (error) {
        console.error('Errore chiamata Gemini API:', error);
        throw error;
    }
}
async function searchAnimeInfo(animeName) {
    try {
        const apiKey = getGeminiApiKey();
        if (!apiKey) {
            throw new Error('Chiave API Gemini non configurata');
        }
        const prompt = `
Fornisci informazioni dettagliate sull'anime "${animeName}" in formato JSON.
Includi: title, description (max 200 caratteri), genre (array), releaseYear, episodes, studio, rating (1-10), status.
Se l'anime non esiste, rispondi con null.
Rispondi SOLO con JSON valido, senza testo aggiuntivo.

Esempio formato:
{
  "title": "Nome Anime",
  "description": "Breve descrizione...",
  "genre": ["azione", "avventura"],
  "releaseYear": 2023,
  "episodes": 24,
  "studio": "Studio Name",
  "rating": 8.5,
  "status": "completed"
}
`;
        const response = await callGeminiAPI(prompt, apiKey);
        try {
            const animeInfo = JSON.parse(response);
            return animeInfo;
        } catch (parseError) {
            console.error('Errore parsing risposta Gemini:', parseError);
            return null;
        }
    } catch (error) {
        console.error('Errore ricerca anime:', error);
        return null;
    }
}
async function getAnimeRecommendations(userAnimes, preferredGenres) {
    try {
        const apiKey = getGeminiApiKey();
        if (!apiKey) {
            throw new Error('Chiave API Gemini non configurata');
        }
        const prompt = `
Basandoti su questi anime che l'utente ha già visto: ${userAnimes.join(', ')}
E sui generi preferiti: ${preferredGenres.join(', ')}

Suggerisci 5 anime simili in formato JSON array.
Per ogni anime includi: title, description (max 150 caratteri), genre (array), releaseYear, episodes, studio, rating (1-10).
Rispondi SOLO con JSON array valido, senza testo aggiuntivo.

Formato:
[
  {
    "title": "Nome Anime",
    "description": "Breve descrizione...",
    "genre": ["genere1", "genere2"],
    "releaseYear": 2023,
    "episodes": 12,
    "studio": "Studio Name",
    "rating": 8.0
  }
]
`;
        const response = await callGeminiAPI(prompt, apiKey);
        try {
            const recommendations = JSON.parse(response);
            return Array.isArray(recommendations) ? recommendations : [];
        } catch (parseError) {
            console.error('Errore parsing raccomandazioni:', parseError);
            return [];
        }
    } catch (error) {
        console.error('Errore raccomandazioni anime:', error);
        return [];
    }
}
async function analyzeAnimeForRating(animeTitle, userNotes) {
    try {
        const apiKey = getGeminiApiKey();
        if (!apiKey) {
            throw new Error('Chiave API Gemini non configurata');
        }
        const prompt = `
Analizza l'anime "${animeTitle}" ${userNotes ? `considerando queste note dell'utente: "${userNotes}"` : ''}.

Fornisci in formato JSON:
- suggestedRating: voto da 1 a 10 basato su qualità generale
- tags: array di 5-8 tag pertinenti in italiano
- analysis: breve analisi di 100-150 caratteri

Rispondi SOLO con JSON valido:
{
  "suggestedRating": 8.5,
  "tags": ["azione", "drammatico", "shonen"],
  "analysis": "Anime eccellente con ottima animazione e trama coinvolgente..."
}
`;
        const response = await callGeminiAPI(prompt, apiKey);
        try {
            const analysis = JSON.parse(response);
            return {
                suggestedRating: analysis.suggestedRating || 7,
                tags: analysis.tags || [],
                analysis: analysis.analysis || 'Analisi non disponibile'
            };
        } catch (parseError) {
            console.error('Errore parsing analisi:', parseError);
            return {
                suggestedRating: 7,
                tags: [
                    'anime'
                ],
                analysis: 'Analisi non disponibile'
            };
        }
    } catch (error) {
        console.error('Errore analisi anime:', error);
        return {
            suggestedRating: 7,
            tags: [
                'anime'
            ],
            analysis: 'Errore nell\'analisi'
        };
    }
}
async function searchAnimeNews() {
    try {
        const apiKey = getGeminiApiKey();
        if (!apiKey) {
            // Fallback con notizie simulate
            return getSimulatedNews();
        }
        const prompt = `
Genera 5 notizie recenti e realistiche dal mondo degli anime in formato JSON.
Includi: title, description (max 200 caratteri), url (simulato), publishedAt (data recente), source.
Le notizie devono essere credibili e attuali.

Formato JSON array:
[
  {
    "title": "Titolo notizia",
    "description": "Descrizione breve...",
    "url": "https://example.com/news/1",
    "publishedAt": "2024-01-15T10:00:00Z",
    "source": "Anime News Network"
  }
]
`;
        const response = await callGeminiAPI(prompt, apiKey);
        try {
            const news = JSON.parse(response);
            return Array.isArray(news) ? news : getSimulatedNews();
        } catch (parseError) {
            console.error('Errore parsing notizie:', parseError);
            return getSimulatedNews();
        }
    } catch (error) {
        console.error('Errore ricerca notizie:', error);
        return getSimulatedNews();
    }
}
// Notizie simulate come fallback
function getSimulatedNews() {
    return [
        {
            title: "Nuovo anime di Studio MAPPA annunciato per il 2024",
            description: "Lo studio di animazione MAPPA ha rivelato un nuovo progetto anime che debutterà nella primavera 2024, promettendo un'animazione di alta qualità.",
            url: "https://example.com/news/1",
            publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            source: "Anime News Network"
        },
        {
            title: "Attack on Titan: annunciato film conclusivo",
            description: "Wit Studio ha confermato che la saga di Attack on Titan si concluderà con un film cinematografico che adatterà gli ultimi capitoli del manga.",
            url: "https://example.com/news/2",
            publishedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            source: "Crunchyroll News"
        },
        {
            title: "Demon Slayer: nuova stagione in produzione",
            description: "Ufotable ha annunciato che una nuova stagione di Demon Slayer è attualmente in produzione, con uscita prevista per il 2025.",
            url: "https://example.com/news/3",
            publishedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
            source: "AnimeJapan"
        },
        {
            title: "One Piece raggiunge 1000 episodi",
            description: "L'anime di One Piece ha raggiunto il traguardo storico dei 1000 episodi, celebrando oltre 20 anni di avventure con Luffy e la sua ciurma.",
            url: "https://example.com/news/4",
            publishedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
            source: "Toei Animation"
        },
        {
            title: "Jujutsu Kaisen: film in arrivo nei cinema",
            description: "Il nuovo film di Jujutsu Kaisen arriverà nei cinema italiani il prossimo mese, portando sul grande schermo le avventure di Yuji Itadori.",
            url: "https://example.com/news/5",
            publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
            source: "Nexo Digital"
        }
    ];
}
function saveGeminiApiKey(apiKey) {
    try {
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('gemini-api-key', apiKey);
        }
    } catch (error) {
        console.error('Errore nel salvare la chiave API:', error);
    }
}
function getCurrentGeminiApiKey() {
    return getGeminiApiKey();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/newsContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NewsProvider": (()=>NewsProvider),
    "useNews": (()=>useNews)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/gemini.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const NewsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NewsProvider({ children }) {
    _s();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Carica le notizie dal localStorage al mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsProvider.useEffect": ()=>{
            try {
                const savedNews = localStorage.getItem('anime-news');
                if (savedNews) {
                    const parsedNews = JSON.parse(savedNews);
                    setNews(parsedNews);
                }
            } catch (error) {
                console.error('Errore nel caricamento delle notizie:', error);
            }
        }
    }["NewsProvider.useEffect"], []);
    // Salva le notizie nel localStorage quando cambiano
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewsProvider.useEffect": ()=>{
            try {
                if (news.length > 0) {
                    localStorage.setItem('anime-news', JSON.stringify(news));
                }
            } catch (error) {
                console.error('Errore nel salvataggio delle notizie:', error);
            }
        }
    }["NewsProvider.useEffect"], [
        news
    ]);
    const fetchNews = async ()=>{
        setIsLoading(true);
        setError(null);
        try {
            const newsData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$gemini$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["searchAnimeNews"])();
            // Aggiungi ID univoci se non presenti
            const newsWithIds = newsData.map((item, index)=>({
                    ...item,
                    id: `news-${Date.now()}-${index}`
                }));
            setNews(newsWithIds);
        } catch (error) {
            console.error('Errore nel recupero delle notizie:', error);
            setError('Errore nel recupero delle notizie anime');
        } finally{
            setIsLoading(false);
        }
    };
    const refreshNews = async ()=>{
        await fetchNews();
    };
    const updateNews = (id, updates)=>{
        setNews((prev)=>prev.map((item)=>item.id === id ? {
                    ...item,
                    ...updates
                } : item));
    };
    const addNews = (newsItem)=>{
        const newItem = {
            ...newsItem,
            id: `news-${Date.now()}`
        };
        setNews((prev)=>[
                newItem,
                ...prev
            ]);
    };
    const deleteNews = (id)=>{
        setNews((prev)=>prev.filter((item)=>item.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NewsContext.Provider, {
        value: {
            news,
            isLoading,
            error,
            fetchNews,
            updateNews,
            addNews,
            deleteNews,
            refreshNews
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/newsContext.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(NewsProvider, "w0rd+Wo0bgReXq2AZHQPVVLkVSg=");
_c = NewsProvider;
function useNews() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NewsContext);
    if (context === undefined) {
        throw new Error('useNews deve essere usato all\'interno di un NewsProvider');
    }
    return context;
}
_s1(useNews, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NewsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_07e2f0f4._.js.map