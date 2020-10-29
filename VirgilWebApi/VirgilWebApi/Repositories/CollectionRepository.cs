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
            throw new NotImplementedException();
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

        public Collection GetById(int collectionId)
        {
            throw new NotImplementedException();
        }

        public void UpdateCollection(Collection collection)
        {
            throw new NotImplementedException();
        }
    }
}
