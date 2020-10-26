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
    }
}
