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

        public void AddBook(int userId)
        {
            throw new NotImplementedException();

        }

        public void DeleteBook(int userId)
        {
            throw new NotImplementedException();
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

        public Book GetBook(int userId)
        {
            throw new NotImplementedException();
        }
    }
}
