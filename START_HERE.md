# EMS Project — Setup Guide (Hindi + English)

Isme do folders hain:
- `backend`  -> Node/Express server (port 8888) — employee add/list/delete
- `frontend` -> React (Vite) app jo backend se data leta hai

## Kaise chalayein

### 1) Backend chalao
VS Code mein `backend` folder ka terminal kholo (ya poora `ems-project` folder ek workspace ke roop mein kholo):

```
cd backend
npm install
npm start
```

Terminal mein ye dikhna chahiye:
```
Server is running on port 8888
```

Ye terminal **band mat karna** — jab tak kaam kar rahe ho, backend chalta rehna chahiye.

### 2) Frontend chalao (naya terminal)

```
cd frontend
npm install
npm run dev
```

Terminal mein ek link milega jaise:
```
Local:   http://localhost:5173/
```

Us link ko browser mein kholo. Ab "Add Employee" form use kar sakte ho.

## Note
- Backend ka data **in-memory** hai — matlab server restart hone par employee list khali ho jayegi. Ye sirf seekhne/testing ke liye theek hai.
- Agar kabhi "port already in use" jaisa error aaye, backend terminal band karke `Ctrl+C` se rok do, phir dobara `npm start` chalao.
- Agar dono ek saath open karne hain VS Code mein: **File → Open Folder** karke seedha `ems-project` folder (jisme backend aur frontend dono andar hain) kholo — dono ek hi window mein dikh jayenge.
