# Quick Start Commands

## One-Line Installation (Run from project root)

### Windows PowerShell
```powershell
# Backend setup
cd backend; npm install; $env:MONGODB_URI="mongodb://localhost:27017/student_team_db"; $env:PORT="5000"

# Frontend setup (in new terminal)
cd frontend; npm install
```

### Mac/Linux
```bash
# Backend setup
cd backend && npm install && export MONGODB_URI="mongodb://localhost:27017/student_team_db" && export PORT="5000"

# Frontend setup (in new terminal)
cd frontend && npm install
```

## Running the Project

### Terminal 1 - Backend
```bash
cd backend
npm start
```

**Expected Output:**
```
Server running on port 5000
MongoDB Connected
```

### Terminal 2 - Frontend
```bash
cd frontend
npm start
```

**Expected Output:**
```
Compiled successfully!
Webpack compiled with 1 warning.

You can now view student-team-frontend in the browser.
Local:          http://localhost:3000
```

## Verify Installation

1. **Backend Test:**
   ```bash
   curl http://localhost:5000/api/test
   ```
   Should return: `{"message":"API is working"}`

2. **Frontend:**
   Open browser: `http://localhost:3000`

## Key URLs

| Page | URL |
|------|-----|
| Home | http://localhost:3000 |
| Add Member | http://localhost:3000/add |
| View Members | http://localhost:3000/members |
| Member Details | http://localhost:3000/members/:id |
| API Test | http://localhost:5000/api/test |
| Get All Members | http://localhost:5000/api/members |

## Development Commands

### Backend
```bash
cd backend

# Install dependencies
npm install

# Start server
npm start

# Start with auto-reload (install nodemon first)
npm install --save-dev nodemon
npm run dev
```

### Frontend
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (WARNING: irreversible)
npm run eject
```

## Database Commands

### Start MongoDB (if not auto-running)
```bash
# Windows
mongod

# Mac
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Connect to MongoDB
```bash
mongosh
use student_team_db
db.members.find()
```

## Initial Test Data

You can use Postman or curl to add test data:

```bash
curl -X POST http://localhost:5000/api/members \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "role": "Backend Developer",
    "email": "john@example.com",
    "contact": "9876543210",
    "rollNumber": "001",
    "year": "3rd Year",
    "degree": "B.Tech CSE",
    "aboutProject": "Worked on API development",
    "hobbies": "Coding, Gaming",
    "aim": "Full-Stack Developer"
  }'
```

## Troubleshooting

### Backend won't connect to MongoDB
```bash
# Check if MongoDB is running
mongosh

# If error, start MongoDB
mongod
```

### Port already in use
```bash
# Find what's using port 5000
lsof -i :5000  # Mac/Linux
netstat -ano | findstr :5000  # Windows

# Kill process
kill -9 <PID>  # Mac/Linux
taskkill /PID <PID> /F  # Windows
```

### Dependencies issues
```bash
# Clear cache
npm cache clean --force

# Reinstall
rm -rf node_modules package-lock.json
npm install
```

### CORS errors
- Ensure backend is running on port 5000
- Ensure frontend is on port 3000
- Check browser console for errors

## Notes

- MongoDB must be running before starting the backend
- Backend must be running before using the frontend app
- Images are stored in `backend/uploads/`
- Maximum image size: 5MB
- Supported formats: JPEG, JPG, PNG, GIF
- All routes use `http://localhost:3000` as base URL for frontend
- All APIs use `http://localhost:5000/api` as base URL for backend
