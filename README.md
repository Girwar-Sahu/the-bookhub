
# TheBookHub

BookHub is an engaging web application designed to provide users with a comprehensive platform to explore, search, and manage their favorite books. Built with a modern tech stack, it ensures a seamless user experience for both casual readers and book enthusiasts.

## Snapshot
![Screenshot 2024-12-25 014344](https://github.com/user-attachments/assets/15485175-4701-435f-b453-412b55fe359c)
![Screenshot 2024-12-30 155406](https://github.com/user-attachments/assets/d87bff34-e701-4ac3-86f5-6ec5892bf257)



## Features

### User-Friendly Interface

- Responsive Design: Optimized for all devices, ensuring usability on mobile, tablet, and desktop.

- Dark Mode Support: Users can switch between light and dark modes for personalized browsing.

### Book Management

- Search Functionality: Search for books by title or author.

- Filter & Sort: Sort books by newest or oldest and apply search filters.

- Detailed Book Pages: View comprehensive details of each book, including title, author, and description.

### Pagination & Lazy Loading

- Show More Feature: Fetch and display additional books without reloading the page.


## Tech Stack

### Frontend

- **React**: Component-based library for building user interfaces.

- **TailwindCSS**: Utility-first CSS framework for styling.

- **Axios**: For data fetching and api calling.

- **React Router**: For dynamic routing within the app.

### Backend

- **Node.js**: JavaScript runtime environment.

- **Express.js**: Web framework for building RESTful APIs.

- **MongoDB**: NoSQL database for storing book data.

### Additional Libraries

- **date-fns**: For handling date formatting.

- **lucide-react**: For modern icons.
## Installation and Usage

### Steps
1. Clone the repository:
```bash
git clone https://github.com/Girwar-Sahu/the-bookhub.git
```
2. Navigate to the project directory:
```bash
cd bookhub
```
3. Install dependencies and run backend server:
```bash
npm install
npm run dev
```
4. Install dependencies and run frontend server:
```bash
cd client
npm install
npm run dev
```
5. Open your browser and navigate to http://localhost:3000 to explore the app.

6. go to http://localhost:3000/admin to perform **CRUD** operation

### frontend Routes

- "/" - root route
- "/admin" - for access admin routes and perform **CRUD** operation
- "/books" - for display all books in single page
- "/about" - about section 


## Authors

- [@girwar-sahu](https://www.github.com/girwar-sahu)


## Acknowledgements

- Inspired by modern book browsing platforms.

- Special thanks to the open-source community for their tools and resources.

## License

 This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/)

