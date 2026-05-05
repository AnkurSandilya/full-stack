# Complete Setup & Run Guide

## Step 1: Install MongoDB

### Windows
1. Download MongoDB Community Edition from https://www.mongodb.com/try/download/community
2. Run the installer and follow prompts
3. Choose "Install MongoDB as a Service"
4. Complete installation
5. MongoDB will start automatically

### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu)
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

## Step 2: Backend Installation & Setup

### 2.1 Install Backend Dependencies
```bash
cd backend
npm install
```

### 2.2 Verify .env file
The `.env` file should contain:
```
MONGODB_URI=mongodb://localhost:27017/student_team_db
PORT=5000
NODE_ENV=development
```

### 2.3 Start Backend Server
```bash
npm start
```

You should see:
```
Server running on port 5000
MongoDB Connected
```

## Step 3: Frontend Installation & Setup

### 3.1 Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 3.2 Start Frontend Server
```bash
npm start
```

This will automatically open browser at `http://localhost:3000`

## Step 4: Verify Installation

### 4.1 Test Backend API
Open browser and visit:
```
http://localhost:5000/api/test
```

You should see:
```json
{"message": "API is working"}
```

### 4.2 Test Frontend
Visit: `http://localhost:3000`

You should see the home page with team name and buttons.

## Running the Complete Application

### Terminal 1 (Backend):
```bash
cd backend
npm start
```

### Terminal 2 (Frontend):
```bash
cd frontend
npm start
```

## Quick Commands Reference

### Backend Commands
```bash
# Install dependencies
npm install

# Start server
npm start

# Development with auto-reload (requires nodemon)
npm install --save-dev nodemon
npm run dev
```

### Frontend Commands
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build

# Run tests
npm test
```

## Using the Application

1. **Home Page** (http://localhost:3000)
   - Click "Add Member" to add new team members
   - Click "View Members" to see all members

2. **Add Member Page** (http://localhost:3000/add)
   - Fill in all required fields (*)
   - Upload profile image (optional)
   - Click "Add Member" to submit

3. **View Members Page** (http://localhost:3000/members)
   - See all members in card layout
   - Click "View Details" on any card

4. **Member Details Page** (http://localhost:3000/members/:id)
   - See full member information
   - Click "Back to Members" to return

## Testing with Postman

### 1. Get All Members
```
Method: GET
URL: http://localhost:5000/api/members
```

### 2. Add Member with Image
```
Method: POST
URL: http://localhost:5000/api/members
Content-Type: multipart/form-data

Body (form-data):
- name: John Doe
- role: Backend Developer
- email: john@example.com
- contact: 9876543210
- rollNumber: 001
- year: 3rd Year
- degree: B.Tech CSE
- aboutProject: Worked on API development
- hobbies: Coding, Gaming
- certificate: AWS Certified
- internship: 6 months internship
- aim: Become full-stack developer
- profileImage: [choose image file]
```

### 3. Get Single Member
```
Method: GET
URL: http://localhost:5000/api/members/{member_id}
```

(Replace {member_id} with actual MongoDB ObjectId from GET all members response)

## Database Management

### MongoDB Shell Commands

```bash
# Connect to MongoDB
mongosh

# Switch to database
use student_team_db

# View all collections
show collections

# View all members
db.members.find()

# View specific member
db.members.findOne({_id: ObjectId("...")})

# Count members
db.members.countDocuments()

# Delete all members
db.members.deleteMany({})

# Exit
exit
```

## Folder Structure

```
full-stack/
├── backend/
│   ├── config/
│   │   └── db.js                 (Database configuration)
│   ├── models/
│   │   └── Member.js             (Member schema)
│   ├── routes/
│   │   └── members.js            (API endpoints)
│   ├── middleware/
│   │   └── upload.js             (File upload handler)
│   ├── uploads/                  (Stores uploaded images)
│   ├── server.js                 (Main server file)
│   ├── package.json
│   ├── .env                      (Environment variables)
│   └── .gitignore
│
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── pages/
    │   │   ├── Home.js           (Home page)
    │   │   ├── AddMember.js       (Add member form)
    │   │   ├── ViewMembers.js     (Members list)
    │   │   └── MemberDetails.js   (Member details)
    │   ├── styles/
    │   │   ├── Home.css
    │   │   ├── AddMember.css
    │   │   ├── ViewMembers.css
    │   │   ├── MemberDetails.css
    │   │   └── index.css
    │   ├── App.js                (Main app component)
    │   ├── App.css
    │   └── index.js              (Entry point)
    ├── package.json
    └── .gitignore
```

## Environment Files

### Backend .env
```
MONGODB_URI=mongodb://localhost:27017/student_team_db
PORT=5000
NODE_ENV=development
```

### Frontend .env (if needed)
```
REACT_APP_API_URL=http://localhost:5000
```

## Useful Links

- React Documentation: https://react.dev
- React Router: https://reactrouter.com
- Express.js: https://expressjs.com
- MongoDB: https://www.mongodb.com
- Mongoose: https://mongoosejs.com
- Axios: https://axios-http.com
- Multer: https://github.com/expressjs/multer

## Common Issues & Solutions

### Issue: MongoDB Connection Error
**Solution:**
```bash
# Make sure MongoDB is running
mongod

# For Windows, check Services:
# Press Win+R → services.msc → Find "MongoDB" → Start
```

### Issue: Port 5000 Already in Use
**Solution:**
```bash
# Find process using port 5000
lsof -i :5000  (Mac/Linux)
netstat -ano | findstr :5000  (Windows)

# Kill the process
kill -9 <PID>  (Mac/Linux)
taskkill /PID <PID> /F  (Windows)
```

### Issue: Port 3000 Already in Use
**Solution:**
```bash
# Same as above but for port 3000
# Or specify different port:
PORT=3001 npm start
```

### Issue: Node Modules Issues
**Solution:**
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

### Issue: Images Not Uploading
**Solution:**
- Check uploads folder exists: `backend/uploads/`
- Verify file size < 5MB
- Only JPEG, JPG, PNG, GIF are allowed
- Ensure backend is running

## Deployment Notes

For production deployment:

1. Update MongoDB URI to Atlas URL
2. Set NODE_ENV=production
3. Build frontend: `npm run build`
4. Serve static files from frontend/build
5. Use environment variables for secrets
6. Enable HTTPS
7. Configure CORS properly

## Support

For detailed documentation, see README.md in the project root.
