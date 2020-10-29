using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirgilWebApi.Model;

namespace VirgilWebApi.Repositories
{
    public class BookRepository : BaseRepository, IBookRepository
    {
        public BookRepository(IConfiguration configuration) : base(configuration) { }

        public void AddBook(Book book)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Book (bookName, UserId, BookLink, Details, CategoryId)
                    VALUES (@bookName, @userId, @bookLink, @details, @categoryId)";
                    cmd.Parameters.AddWithValue("@bookName", book.BookName);
                    cmd.Parameters.AddWithValue("@userId", book.UserId);
                    cmd.Parameters.AddWithValue("@bookLink", book.BookLink);
                    cmd.Parameters.AddWithValue("@details", book.Details);
                    cmd.Parameters.AddWithValue("@categoryId", book.CategoryId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void DeleteBook(int bookId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE FROM BookCollection WHERE bookId = @bookId; DELETE FROM Book WHERE Id = @bookId;";
                    cmd.Parameters.AddWithValue("@bookId", bookId);

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public List<Book> GetAll(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT b.Id, b.BookName, b.UserId, b.BookLink, b.Details, b.CategoryId FROM Book b WHERE b.UserId = @userId";
                    cmd.Parameters.AddWithValue("@userId", userId);

                    var reader = cmd.ExecuteReader();

                    var listOfBooks = new List<Book>();

                    while(reader.Read())
                    {
                        listOfBooks.Add(new Book()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("id")),
                            BookName = reader.GetString(reader.GetOrdinal("BookName")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            BookLink = reader.GetString(reader.GetOrdinal("BookLink")),
                            Details = reader.GetString(reader.GetOrdinal("Details")),
                            CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId"))
                        });
                    }
                    reader.Close();

                    return listOfBooks;
                }
            }
        }

        public Book GetBook(int userId, int bookId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT b.Id, b.BookName, b.UserId, b.BookLink, b.Details, b.CategoryId FROM Book b WHERE b.UserId = @userId AND b.Id = @bookId";
                    cmd.Parameters.AddWithValue("@userId", userId);
                    cmd.Parameters.AddWithValue("@bookId", bookId);

                    var reader = cmd.ExecuteReader();

                    var book = new Book();

                    while (reader.Read())
                    {
                        book = (new Book()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("id")),
                            BookName = reader.GetString(reader.GetOrdinal("BookName")),
                            UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                            BookLink = reader.GetString(reader.GetOrdinal("BookLink")),
                            Details = reader.GetString(reader.GetOrdinal("Details")),
                            CategoryId = reader.GetInt32(reader.GetOrdinal("CategoryId"))
                        });
                    }
                    reader.Close();

                    return book;
                }
            }
        }

        public void UpdateBook(Book book)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"UPDATE Book SET bookName = @bookName, UserId = @userId, BookLink = @bookLink, Details = @details, CategoryId = @categoryId WHERE id = @id";
                    cmd.Parameters.AddWithValue("@bookName", book.BookName);
                    cmd.Parameters.AddWithValue("@userId", book.UserId);
                    cmd.Parameters.AddWithValue("@id", book.Id);
                    cmd.Parameters.AddWithValue("@bookLink", book.BookLink);
                    cmd.Parameters.AddWithValue("@details", book.Details);
                    cmd.Parameters.AddWithValue("@categoryId", book.CategoryId);

                    cmd.ExecuteNonQuery();
                }
            }
        }



    }
}
