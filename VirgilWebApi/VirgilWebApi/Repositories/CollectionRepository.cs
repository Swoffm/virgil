using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirgilWebApi.Model;

namespace VirgilWebApi.Repositories
{
    public class CollectionRepository : BaseRepository, ICollectionRepository
    {
        public CollectionRepository(IConfiguration configuration) : base(configuration) { }

        public void CreateCollection(Collection collection)
        {
            throw new NotImplementedException();
        }

        public void DeleteCollection(int collectionId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"DELETE UserCollection WHERE collectionId = @collectionId;
                        DELETE BookCollection WHERE collectionId = @collectionId;
                           DELETE Collection WHERE id = @collectionId";

                    cmd.Parameters.AddWithValue("@collectionId", collectionId);

                    cmd.ExecuteNonQuery();
                }
            }
        }




        public List<Collection> GetAll(int userId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT c.id, c.name FROM Collection c 
	INNER JOIN UserCollection u ON c.Id = u.CollectionId 
		WHERE u.UserId = @userId";
                    cmd.Parameters.AddWithValue("@userId", userId);

                    var reader = cmd.ExecuteReader();

                    var collections = new List<Collection>();

                    while(reader.Read())
                    {
                        collections.Add(new Collection()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("name"))
                        });
                    }

                    reader.Close();

                    return collections;
                }
            }
        }

        public List<Book> GetAllBooksInCollection(int collectionId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT b.id, b.bookName, b.userId, b.bookLink, b.details, b.categoryId FROM Book b 
INNER JOIN BookCollection bc ON b.id = bc.BookId WHERE bc.CollectionId = @collectionId;";
                    cmd.Parameters.AddWithValue("@collectionId", collectionId);

                    var reader = cmd.ExecuteReader();

                    var books = new List <Book>();

                    while(reader.Read())
                    {
                        books.Add(new Book()
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

                    return books;


                }
            }
        }



        public Collection GetById(int collectionId)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"SELECT c.id, c.name FROM Collection c 
	INNER JOIN UserCollection u ON c.Id = u.CollectionId 
		WHERE u.collectionId = @collectionId";
                    cmd.Parameters.AddWithValue("@collectionId", collectionId);
                    var reader = cmd.ExecuteReader();

                    var collection = new Collection();

                    while(reader.Read())
                    {
                        collection = new Collection()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("Id")),
                            Name = reader.GetString(reader.GetOrdinal("Name"))
                        };
                    }

                    reader.Close();
                    return collection;
                }
            }
        }

        public void UpdateCollection(Collection collection)
        {
            throw new NotImplementedException();
        }
    }
}
