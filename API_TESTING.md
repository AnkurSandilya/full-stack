# API Testing URLs & Examples

## Base URLs
- **Backend API:** `http://localhost:5000/api`
- **Frontend:** `http://localhost:3000`

## Endpoints with cURL Examples

### 1. Test API Connection
```bash
curl http://localhost:5000/api/test
```
Response:
```json
{"message":"API is working"}
```

---

### 2. Add Member (POST)
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
    "aboutProject": "API Development",
    "hobbies": "Coding",
    "certificate": "AWS Certified",
    "internship": "6 months",
    "aim": "Full-Stack Developer"
  }'
```

**With Image (using Postman):**
- Method: POST
- URL: `http://localhost:5000/api/members`
- Content-Type: multipart/form-data
- Form Fields:
  - name: John Doe
  - role: Backend Developer
  - email: john@example.com
  - contact: 9876543210
  - rollNumber: 001
  - year: 3rd Year
  - degree: B.Tech CSE
  - profileImage: [select image file]

Response:
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
    "aboutProject": "API Development",
    "hobbies": "Coding",
    "certificate": "AWS Certified",
    "internship": "6 months",
    "aim": "Full-Stack Developer",
    "profileImage": "/uploads/profileImage-1234567890.jpg",
    "createdAt": "2024-05-03T12:00:00.000Z",
    "updatedAt": "2024-05-03T12:00:00.000Z"
  }
}
```

---

### 3. Get All Members (GET)
```bash
curl http://localhost:5000/api/members
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "role": "Backend Developer",
      "email": "john@example.com",
      "contact": "9876543210",
      "rollNumber": "001",
      "year": "3rd Year",
      "degree": "B.Tech CSE",
      "profileImage": "/uploads/profileImage-1234567890.jpg",
      "createdAt": "2024-05-03T12:00:00.000Z",
      "updatedAt": "2024-05-03T12:00:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Jane Smith",
      "role": "Frontend Developer",
      "email": "jane@example.com",
      "contact": "9876543211",
      "rollNumber": "002",
      "year": "3rd Year",
      "degree": "B.Tech CSE",
      "profileImage": "/uploads/profileImage-1234567891.jpg",
      "createdAt": "2024-05-03T12:05:00.000Z",
      "updatedAt": "2024-05-03T12:05:00.000Z"
    }
  ]
}
```

---

### 4. Get Single Member (GET)
```bash
curl http://localhost:5000/api/members/507f1f77bcf86cd799439011
```

Response:
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
    "aboutProject": "Worked on RESTful API development",
    "hobbies": "Coding, Gaming, Reading",
    "certificate": "AWS Certified Solutions Architect",
    "internship": "6 months at XYZ Corporation",
    "aim": "Become a Full-Stack Developer",
    "profileImage": "/uploads/profileImage-1234567890.jpg",
    "createdAt": "2024-05-03T12:00:00.000Z",
    "updatedAt": "2024-05-03T12:00:00.000Z"
  }
}
```

---

## Browser Testing URLs

### Frontend Pages
1. **Home Page**
   ```
   http://localhost:3000
   ```

2. **Add Member Page**
   ```
   http://localhost:3000/add
   ```

3. **View Members Page**
   ```
   http://localhost:3000/members
   ```

4. **Member Details Page** (replace ID)
   ```
   http://localhost:3000/members/507f1f77bcf86cd799439011
   ```

---

## Postman Collection JSON

Import this into Postman:

```json
{
  "info": {
    "name": "Student Team API",
    "description": "API for Student Team Members Management"
  },
  "item": [
    {
      "name": "Test Connection",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/api/test"
      }
    },
    {
      "name": "Get All Members",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/api/members"
      }
    },
    {
      "name": "Add Member",
      "request": {
        "method": "POST",
        "url": "http://localhost:5000/api/members",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"John Doe\",\n  \"role\": \"Backend Developer\",\n  \"email\": \"john@example.com\",\n  \"contact\": \"9876543210\",\n  \"rollNumber\": \"001\",\n  \"year\": \"3rd Year\",\n  \"degree\": \"B.Tech CSE\"\n}"
        }
      }
    },
    {
      "name": "Get Member by ID",
      "request": {
        "method": "GET",
        "url": "http://localhost:5000/api/members/507f1f77bcf86cd799439011"
      }
    }
  ]
}
```

---

## Error Responses

### Member Not Found
```json
{
  "success": false,
  "message": "Member not found"
}
```

### Validation Error
```json
{
  "success": false,
  "message": "Email is required"
}
```

### Server Error
```json
{
  "success": false,
  "message": "Error message details"
}
```

---

## Image Access URLs

Once a member is added with image, access image via:
```
http://localhost:5000/uploads/profileImage-timestamp.jpg
```

Example:
```
http://localhost:5000/uploads/profileImage-1234567890-123456789.jpg
```

---

## Testing Checklist

- [ ] MongoDB running
- [ ] Backend server running (port 5000)
- [ ] Frontend server running (port 3000)
- [ ] API test endpoint responds
- [ ] Can add member via POST
- [ ] Can view all members via GET
- [ ] Can view single member by ID
- [ ] Profile images display correctly
- [ ] Frontend pages are accessible
- [ ] Form submission works on frontend
