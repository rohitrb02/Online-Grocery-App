using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataAccessLayer.Migrations
{
    /// <inheritdoc />
    public partial class categoryproductrel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AppFeedRate_User_UserId",
                table: "AppFeedRate");

            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Orders_OrderId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Orders_User_UserId",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductFeedRate_Products_ProductsProductId",
                table: "ProductFeedRate");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductFeedRate_User_UserId",
                table: "ProductFeedRate");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Category_CategoryId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Vendor_VendorId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_CategoryId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_VendorId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_ProductFeedRate_UserId",
                table: "ProductFeedRate");

            migrationBuilder.DropIndex(
                name: "IX_Orders_UserId",
                table: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Bills_OrderId",
                table: "Bills");

            migrationBuilder.DropIndex(
                name: "IX_AppFeedRate_UserId",
                table: "AppFeedRate");

            migrationBuilder.AlterColumn<int>(
                name: "ProductsProductId",
                table: "ProductFeedRate",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.CreateTable(
                name: "CategoryProducts",
                columns: table => new
                {
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    ProductsProductId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CategoryProducts", x => new { x.CategoryId, x.ProductsProductId });
                    table.ForeignKey(
                        name: "FK_CategoryProducts_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CategoryProducts_Products_ProductsProductId",
                        column: x => x.ProductsProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CategoryProducts_ProductsProductId",
                table: "CategoryProducts",
                column: "ProductsProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProductFeedRate_Products_ProductsProductId",
                table: "ProductFeedRate",
                column: "ProductsProductId",
                principalTable: "Products",
                principalColumn: "ProductId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProductFeedRate_Products_ProductsProductId",
                table: "ProductFeedRate");

            migrationBuilder.DropTable(
                name: "CategoryProducts");

            migrationBuilder.AlterColumn<int>(
                name: "ProductsProductId",
                table: "ProductFeedRate",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_CategoryId",
                table: "Products",
                column: "CategoryId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_VendorId",
                table: "Products",
                column: "VendorId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductFeedRate_UserId",
                table: "ProductFeedRate",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Bills_OrderId",
                table: "Bills",
                column: "OrderId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_AppFeedRate_UserId",
                table: "AppFeedRate",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_AppFeedRate_User_UserId",
                table: "AppFeedRate",
                column: "UserId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Orders_OrderId",
                table: "Bills",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "OrderId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_User_UserId",
                table: "Orders",
                column: "UserId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductFeedRate_Products_ProductsProductId",
                table: "ProductFeedRate",
                column: "ProductsProductId",
                principalTable: "Products",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductFeedRate_User_UserId",
                table: "ProductFeedRate",
                column: "UserId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Category_CategoryId",
                table: "Products",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Vendor_VendorId",
                table: "Products",
                column: "VendorId",
                principalTable: "Vendor",
                principalColumn: "VendorId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
