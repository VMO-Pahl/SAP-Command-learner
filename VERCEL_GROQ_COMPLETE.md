# 🌐 Vercel + Groq Setup - KOMPLETTE ANLEITUNG

**Deine App wird überall erreichbar sein!**

---

## 🎯 Was passiert

```
GitHub Pages         Vercel           Groq
(deine App)      (dein Backend)    (kostenlose API)
    ↓                  ↓                ↓
Nutzer öffnet      sendet Anfrage   generiert
http://user.      zur Vercel API    Befehle
github.io/...        →  Groq
```

**Alles kostenlos!** ✓

---

## ⏱️ Dauer: 30 Minuten

---

## 📋 SCHRITT 1: Groq Account erstellen (5 Min)

### 1.1 Gehe zu Groq

```
https://console.groq.com
```

### 1.2 Sign Up

Klick oben rechts: **"Sign Up"**

Optionen:
- [ ] Email + Password
- [ ] Mit Google
- [ ] Mit GitHub

**Empfehlung:** Mit GitHub (einfach!)

### 1.3 Bestätige Email

Check deinen Email-Eingang, klick Bestätigungslink.

### 1.4 API Key generieren

Nach Login siehst du Dashboard.

Klick auf: **"API Keys"** (in linker Seitenleiste)

Klick: **"Create API Key"**

Gib Namen ein: `SAP Learner`

Klick: **"Create"**

Du siehst den Key:
```
gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### ⚠️ WICHTIG: Key speichern!

**Kopiere den kompletten Key und speichere ihn sicher!**

Du wirst ihn gleich brauchen und kannst ihn später nicht mehr sehen!

**→ SPEICHERN IN NOTEPAD/EDITOR!**

---

## 📋 SCHRITT 2: GitHub Repository vorbereiten (5 Min)

### 2.1 Gehe zu GitHub

```
https://github.com/new
```

### 2.2 Neues Repository erstellen

**Repository name:**
```
sap-command-learner
```

**Description:** (optional)
```
SAP Command Learner mit Groq API
```

**Public:** ✓ WICHTIG - MUSS PUBLIC SEIN!

**Initialize repository:**
- [ ] Add README
- [ ] Add .gitignore

Klick: **"Create repository"**

### 2.3 Dateien hochladen

Jetzt siehst du leeres Repository.

Klick: **"Add file" → "Upload files"**

Folgende Dateien hochladen:
- ✅ `index.html`
- ✅ `api/generate-commands-groq.js` → `api/generate-commands.js` (UMBENENNEN!)
- ✅ `vercel.json`
- ✅ `.gitignore`
- ✅ `README.md`

### 2.4 Umbenennen (wichtig!)

Wenn du `generate-commands-groq.js` hochlädst, muss sie heißen:
```
api/generate-commands.js
```

**Nicht** `generate-commands-groq.js`!

Wenn falsch benannt → In GitHub umbenennen:
1. Klick auf Datei
2. Klick 3-Punkte-Menü
3. Rename
4. In `api/generate-commands.js` umbenennen

### 2.5 Commit

Klick unten: **"Commit changes"**

---

## 📋 SCHRITT 3: GitHub Pages aktivieren (2 Min)

### 3.1 Gehe zu Settings

Im Repository klick: **"Settings"** (oben rechts)

### 3.2 Klick auf "Pages"

Linke Seitenleiste → **"Pages"**

### 3.3 Konfiguriere Pages

Unter "Build and deployment":

**Source:** 
- Wähle: **"Deploy from a branch"**

**Branch:**
- Wähle: **main**
- Folder: **/ (root)**

**Klick:** Save

Du siehst grüne Meldung:
```
✓ Your site is live at https://[username].github.io/sap-command-learner/
```

**→ Merke diese URL auf!**

Warte 2-3 Minuten bis die App live ist.

---

## 📋 SCHRITT 4: Vercel verbinden (10 Min)

### 4.1 Gehe zu Vercel

```
https://vercel.com
```

### 4.2 Sign Up

Klick: **"Sign Up"**

**Empfehlung:** Mit GitHub verbinden!

Die App fragt: "Authorize Vercel?"
→ Klick: **"Authorize"**

### 4.3 Nach Login: Neues Project

Klick: **"Add New..." → "Project"**

### 4.4 GitHub Repository verbinden

Du siehst: "Import Git Repository"

**Wichtig:** Dein GitHub muss mit Vercel verbunden sein!

Falls nicht:
1. Klick: "Configure Git"
2. Wähle: "GitHub"
3. Autorisiere Vercel bei GitHub
4. Nach Redirect: Neuer Versuch

### 4.5 Repository auswählen

Du siehst Liste deiner Repositories.

Suche und klick: **"sap-command-learner"**

### 4.6 Project Settings

Nach Klick auf Import siehst du Project Settings.

**Wichtig Einstellungen:**

**Framework Preset:** Wähle "Other"

**Root Directory:** `.` (Punkt)

**Build Command:** 
```
echo 'No build needed'
```

**Output Directory:**
```
.
```

### 4.7 Environment Variables hinzufügen

**HIER IST DER WICHTIGSTE TEIL!**

Du siehst ein Feld: **"Environment Variables"**

Klick: **"Add"**

**Name:**
```
GROQ_API_KEY
```

**Value:** (Dein Groq API Key von Schritt 1.4)
```
gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Klick: **"Add Environment Variable"**

✓ Du siehst die Variable in der Liste (mit Sternchen)

### 4.8 Redeploy

Unten klick: **"Deploy"**

Warte auf den Deploy... (2-3 Minuten)

Du siehst: `✓ Deployed`

Deine Vercel URL:
```
https://[vercel-username].vercel.app
```

**→ Merke auch diese URL auf!**

---

## 📋 SCHRITT 5: Alles verbinden (3 Min)

### 5.1 index.html anpassen

Die index.html braucht nur eine kleine Änderung!

In deinem Repository (GitHub):
1. Klick auf `index.html`
2. Klick Stift-Icon (Edit)
3. Suche nach dieser Zeile:

```javascript
const apiUrl = 'http://localhost:3001/api/generate-commands';
```

Ersetze sie mit:
```javascript
const apiUrl = 'https://[vercel-username].vercel.app/api/generate-commands';
```

**Wobei:**
- `[vercel-username]` ist z.B. `my-project-abc123`

Du siehst deine URL in Vercel Dashboard!

4. Scroll unten
5. Klick: **"Commit changes"**

### 5.2 Vercel Redeploy

Gehe zu Vercel Dashboard:
```
https://vercel.com/dashboard
```

Klick auf dein Project: `sap-command-learner`

Oben rechts klick: **"Redeploy"** (oder drei Punkte → Redeploy)

Warte auf Deployment (2-3 Min)

Status sollte sein: `✓ Ready`

---

## 📋 SCHRITT 6: Testen! (5 Min)

### 6.1 App öffnen

Öffne deine GitHub Pages URL:
```
https://[github-username].github.io/sap-command-learner/
```

Du siehst die SAP Command Learner App!

### 6.2 Frage eingeben

Gib eine Frage ein:
```
Wie erstelle ich einen neuen Benutzer?
```

### 6.3 Generieren

Klick: **"Suchen"**

Warte 5-10 Sekunden...

**Befehle sollten kommen!** ✓

### 6.4 Bewerten

Klick ✓ oder ✗

Lexikon wächst! 🎉

### 6.5 Fertig!

Deine App funktioniert überall!

---

## ✅ FERTIG-Checklist

- [ ] Groq Account erstellt
- [ ] API Key generiert und gespeichert
- [ ] GitHub Repository erstellt
- [ ] Dateien hochgeladen & korrekt benannt
- [ ] GitHub Pages aktiviert (Settings → Pages)
- [ ] Vercel Account erstellt
- [ ] Repository zu Vercel verbunden
- [ ] Environment Variable GROQ_API_KEY gesetzt
- [ ] Vercel Deployment erfolgreich (Status: Ready)
- [ ] index.html mit Vercel URL aktualisiert
- [ ] Vercel Redeploy gemacht
- [ ] App funktioniert!
- [ ] Erste Frage generiert ✓

---

## 🔗 URLs zusammengefasst

**GitHub Pages (deine App):**
```
https://[github-username].github.io/sap-command-learner/
```

**Vercel Backend:**
```
https://[vercel-username].vercel.app
```

**Groq API Backend:**
```
https://api.groq.com (automatisch)
```

---

## 💰 Kosten

- GitHub Pages: 🆓 Kostenlos
- Vercel: 🆓 Kostenlos
- Groq API: 🆓 Kostenlos (bis ~500K Tokens/Monat)

**TOTAL: 🆓 KOSTENLOS!**

---

## 🆘 Troubleshooting

### "API Error 401 - Unauthorized"
```
→ Groq API Key ist falsch
→ Vercel Settings → Environment Variables
→ GROQ_API_KEY prüfen
→ Neuer Key generieren falls nötig
→ Vercel Redeploy
```

### "Cannot find module express"
```
→ Vercel muss build.sh haben
→ Oder vercel.json hat Fehler
→ Datei neu hochladen
```

### "CORS Error"
```
→ api/generate-commands.js hat CORS nicht aktiviert
→ Prüfe die Datei - sollte sein:
   res.setHeader('Access-Control-Allow-Origin', '*');
```

### "404 Not Found auf GitHub Pages"
```
→ index.html im Root?
→ Settings → Pages prüfen (Branch: main, Folder: root)
→ 5 Minuten warten
→ Hard Refresh: Ctrl+Shift+R
```

### "App lädt aber zeigt keine Befehle"
```
→ Browser Console öffnen (F12)
→ Netzwerk-Tab checken
→ Prüfe die API URL in index.html
→ Muss sein: https://[vercel].vercel.app/api/...
→ Nicht: http:// (muss https sein!)
```

### "Timeout - Anfrage dauert zu lange"
```
→ Groq API ist überlastet
→ Versuche später nochmal
→ Oder kleinere Frage stellen
```

---

## 💡 Nach dem Setup

### Updates machen

```
1. index.html in GitHub editieren (Stift-Icon)
2. Änderungen machen
3. Commit changes
4. GitHub Pages updated automatisch (~2 Min)
```

### Groq API Key erneuern

Falls Key irgendwann nicht mehr funktioniert:
```
1. https://console.groq.com
2. Alte Key löschen
3. Neue Key erstellen
4. In Vercel Environment Variable updaten
5. Vercel Redeploy
```

### Backend-Code ändern

Falls du `api/generate-commands.js` änderst:
```
1. In GitHub editieren
2. Commit changes
3. Vercel deployiert automatisch (~2 Min)
```

---

## 🎉 FERTIG!

Deine SAP Command Learner App läuft jetzt:
- ✅ Auf GitHub Pages (überall erreichbar!)
- ✅ Mit Vercel Backend (kostenlos gehostet!)
- ✅ Mit Groq API (kostenlose AI!)
- ✅ 100% Kostenlos!

**Glückwunsch!** 🚀

---

## 📞 Schnelle Hilfe

| Problem | Lösung |
|---------|--------|
| API Key funktioniert nicht | Verify in Vercel Settings |
| App zeigt nichts | Vercel Redeploy + Hard Refresh |
| 404 auf GitHub Pages | Settings → Pages Konfiguration |
| Langsam | Normal! Groq kann überlastet sein |
| Fehler in Console | Vercel Logs checken |

---

**Alles klar? Viel Erfolg! 🎯**
