using DataAccessLayer;
using GroceryAppAPI.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace GroceryAppAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddDbContext<GroceryDBContext>(options =>
            {
                options.UseSqlServer("Data Source=.\\sqlexpress;Initial Catalog=GroceryAppDB;Integrated Security=True;Encrypt=False");
                //options.UseSqlServer(connection, b => b.MigrationsAssembly("GroceryAppAPI"));
            });
            builder.Services.Add(new ServiceDescriptor(typeof(IDatabaseAdmin), typeof(AdminDataAccessLayer),ServiceLifetime.Transient));
            builder.Services.Add(new ServiceDescriptor(typeof(IDatabaseVendor), typeof(VendorDataAccessLayer), ServiceLifetime.Transient));
            builder.Services.Add(new ServiceDescriptor(typeof(IDataBaseUser), typeof(UserDataAccessLayer), ServiceLifetime.Transient));
            builder.Services.Add(new ServiceDescriptor(typeof(IAdminBusiness), typeof(AdminBusinessLayer), ServiceLifetime.Transient));
            builder.Services.Add(new ServiceDescriptor(typeof(IVendorBussiness), typeof(VendorBusinessLayer), ServiceLifetime.Transient));
            builder.Services.Add(new ServiceDescriptor(typeof(IUserBusiness), typeof(UserBusinessLayer), ServiceLifetime.Transient));
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("clients-allowed", policy =>
                {
                    policy.WithOrigins("http://localhost:4200")
                    .AllowAnyHeader().AllowAnyMethod();
                    policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                });
            });
            // enable jwt - bearer authentication policy

            builder.Services.AddAuthentication(opt =>
            {
                opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                opt.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = false;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuer = true,
                        ValidateAudience = true,
                        ValidateLifetime = true,
                        ValidateIssuerSigningKey = true,
                        ValidIssuer = "groceryApp",//ConfigurationManager.AppSetting["JWT:ValidIssuer"],
                        ValidAudience = "groceryApp",// ConfigurationManager.AppSetting["JWT:ValidAudience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("BYYM000OLlMQG6VVVp1OH7Xzyr7gHuw1qvUC5dcGt3SNM"/*ConfigurationManager.AppSetting["JWT:Secret"]*/))
                    };
                });
            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors("clients-allowed");
            app.UseAuthentication();
            app.UseAuthorization();
  

            app.MapControllers();

            app.Run();
        }
    }
}