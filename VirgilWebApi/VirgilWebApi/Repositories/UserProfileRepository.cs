using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using VirgilWebApi.Model;

namespace VirgilWebApi.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {

        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }
        public UserProfile GetByUserName(string name)
        {

           using (var conn = Connection)
            {
                conn.Open();

                using(var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT id, username FROM UserData WHERE username = @name";
                    cmd.Parameters.AddWithValue("@name", name);

                    var reader = cmd.ExecuteReader();

                    var userProfile = new UserProfile();
                    while(reader.Read())
                    {
                        userProfile.Id = reader.GetInt32(reader.GetOrdinal("id"));
                        userProfile.UserName = reader.GetString(reader.GetOrdinal("username"));
                    }

                    reader.Close();

                    return userProfile;

                }
            }
        }

        public List<UserProfile> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();

                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT id, username FROM UserData";
                  

                    var reader = cmd.ExecuteReader();

                    var userProfile = new List<UserProfile>();
                    while (reader.Read())
                    {
                        userProfile.Add(new UserProfile()
                        {
                            Id = reader.GetInt32(reader.GetOrdinal("id")),
                            UserName = reader.GetString(reader.GetOrdinal("username"))
                        });
                    }

                    reader.Close();

                    return userProfile;

                }
            }
        }

        public void CreateUserAccount(UserProfile profile)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO UserData (username) VALUES (@username); 
                        INSERT INTO Category (Category, UserId) VALUES ('Other', 
                        (SELECT u.id from UserData u where u.username = @username));";

                    cmd.Parameters.AddWithValue("@username", profile.UserName);

                    cmd.ExecuteNonQuery();


                }
            }
        }

        public void DeleteUserAccount(int userId)
        {

            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
        DELETE FROM BookCollection WHERE bookId = (SELECT id FROM book where userId = @userId);
        DELETE Collection where Id = (SELECT collectionId FROM userCollection WHERE userId = @userId);
        DELETE FROM UserCollection WHERE userId = @userId;
        Delete Book WHERE userId = @userId;
        DELETE FROM Category WHERE userId = @userId;
        DELETE Userdata WHERE id = @userId";

                    cmd.Parameters.AddWithValue("@userId", userId);

                    cmd.ExecuteNonQuery();


                }
            }

        }
    }
}
