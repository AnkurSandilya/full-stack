# Student Team Members Management Application

A complete MERN stack application for managing student team members. Built with React, Node.js, Express, MongoDB, and Axios.

## Features

- ✅ Home Page with navigation
- ✅ Add new team members with profile image upload
- ✅ View all team members in card layout
- ✅ View detailed member information
- ✅ Image upload and storage
- ✅ Responsive design
- ✅ RESTful API backend

## Project Structure

```
full-stack/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Member.js
│   ├── routes/
│   │   └── members.js
│   ├── middleware/
│   │   └── upload.js
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
└── frontend/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.js
    │   │   ├── AddMember.js
    │   │   ├── ViewMembers.js
    │   │   └── MemberDetails.js
    │   ├── styles/
    │   │   ├── Home.css
    │   │   ├── AddMember.css
    │   │   ├── ViewMembers.css
    │   │   ├── MemberDetails.css
    │   │   └── index.css
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    ├── public/
    │   └── index.html
    ├── package.json
    └── .gitignore
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with:
```
MONGODB_URI=mongodb://localhost:27017/student_team_db
PORT=5000
NODE_ENV=development
```

4. Start the backend:
```bash
npm start
```

or for development with auto-reload:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend:
```bash
npm start
```

The application will open at `http://localhost:3000`

## API Endpoints

All API endpoints are hosted on `http://localhost:5000/api`

### POST /api/members
**Create a new member**
- **Method:** POST
- **Content-Type:** multipart/form-data
- **Body Parameters:**
  - name (required)
  - role (required)
  - email (required)
  - contact (required)
  - rollNumber (required)
  - year (required)
  - degree (required)
  - aboutProject (optional)
  - hobbies (optional)
  - certificate (optional)
  - internship (optional)
  - aim (optional)
  - profileImage (optional, file)

**Example:**
```
POST http://localhost:5000/api/members
Content-Type: multipart/form-data

name=John Doe
role=Backend Developer
email=john@example.com
contact=9876543210
rollNumber=001
year=3rd Year
degree=B.Tech CSE
profileImage=[image file]
```

### GET /api/members
**Fetch all members**
- **Method:** GET
- **Response:** Array of member objects

**Example:**
```
GET http://localhost:5000/api/members
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "name": "John Doe",
      "role": "Backend Developer",
      "email": "john@example.com",
      "contact": "9876543210",
      "rollNumber": "001",
      "year": "3rd Year",
      "degree": "B.Tech CSE",
      "profileImage": "/uploads/profileImage-123456.jpg",
      "createdAt": "2024-05-03T...",
      "updatedAt": "2024-05-03T..."
    }
  ]
}
```

### GET /api/members/:id
**Fetch a specific member by ID**
- **Method:** GET
- **URL Parameter:** id (MongoDB ObjectId)
- **Response:** Single member object

**Example:**
```
GET http://localhost:5000/api/members/507f1f77bcf86cd799439011
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "role": "Backend Developer",
    "email": "john@example.com",
    "contact": "9876543210",
    "rollNumber": "001",
    "year": "3rd Year",
    "degree": "B.Tech CSE",
    "aboutProject": "Worked on API development",
    "hobbies": "Coding, Gaming",
    "certificate": "AWS Certified",
    "internship": "6 months at XYZ Corp",
    "aim": "Become a Full-Stack Developer",
    "profileImage": "/uploads/profileImage-123456.jpg",
    "createdAt": "2024-05-03T...",
    "updatedAt": "2024-05-03T..."
  }
}
```

## Frontend Routes

- **/** - Home Page
- **/add** - Add Member Page
- **/members** - View All Members Page
- **/members/:id** - Member Details Page

## Database

- **Database Name:** student_team_db
- **Collection Name:** members

### Member Schema

```
{
  name: String (required),
  role: String (required),
  email: String (required, unique),
  contact: String (required),
  rollNumber: String (required),
  year: String (required),
  degree: String (required),
  aboutProject: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aim: String,
  profileImage: String,
  timestamps: true
}
```

## Running Commands

### Start Everything

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### Development Mode

**Backend with auto-reload:**
```bash
cd backend
npm run dev
```

**Frontend with auto-reload:**
```bash
cd frontend
npm start
```

## API Testing URLs

### Using Browser/Postman

1. **Test API Connection:**
   ```
   GET http://localhost:5000/api/test
   ```

2. **Get All Members:**
   ```
   GET http://localhost:5000/api/members
   ```

3. **Add a Member (Use Postman):**
   ```
   POST http://localhost:5000/api/members
   Content-Type: multipart/form-data
   
   Form Data:
   - name: John Doe
   - role: Developer
   - email: john@example.com
   - contact: 9876543210
   - rollNumber: 001
   - year: 3rd Year
   - degree: B.Tech CSE
   - profileImage: [select image file]
   ```

4. **Get Member by ID:**
   ```
   GET http://localhost:5000/api/members/{member_id}
   ```

## Frontend Usage

1. Open `http://localhost:3000` in browser
2. Click "Add Member" to add a new team member
3. Click "View Members" to see all members
4. Click "View Details" on any member card to see full details
5. Upload profile images when adding members

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (file upload)
- CORS
- dotenv

### Frontend
- React
- React Router
- Axios
- CSS3

## Notes

- Images are stored in `backend/uploads` folder
- Maximum image file size: 5MB
- Allowed image formats: JPEG, JPG, PNG, GIF
- MongoDB must be running before starting the backend
- Frontend proxy is configured to point to backend at `http://localhost:5000`

## Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running: `mongod`
- Check `MONGODB_URI` in `.env` file

**Backend won't start:**
- Verify port 5000 is not in use
- Check all dependencies: `npm install`

**Frontend won't start:**
- Verify port 3000 is not in use
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `rm -rf node_modules && npm install`

**Image upload not working:**
- Check `backend/uploads` folder exists
- Verify file size is under 5MB
- Ensure image format is supported (JPEG, JPG, PNG, GIF)

## License

ISC
