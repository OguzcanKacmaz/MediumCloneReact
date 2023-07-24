using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CMasters.DataAccess.Data.Migrations
{
    public partial class mig3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "3966aa75-a14a-4e56-96ba-20927c02fcdb",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6847));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "4450e437-4eb2-4e0f-91dc-4f8fa395d2e1",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6844));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "4d231662-288d-4c6f-b90a-f95afc9937e5",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6850));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "4ee68c24-6ef3-4db2-b046-a666302c2d31",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6849));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "55f9445a-7a11-4902-a234-7f5365d1cdce",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6848));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "60bb0c20-1652-42bb-82d2-58efb10d442e",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6831));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "638edd84-e810-4073-b29c-125c549686d0",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6845));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "7177eedd-71d8-4aa7-85f6-caea03a2dd64",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6842));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "b75bf5b5-ff64-4357-8e2d-a6d125b495b8",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6846));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "e8f058b1-8e17-4cd3-b744-c96ed7438004",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 23, 23, 50, 56, 581, DateTimeKind.Local).AddTicks(6848));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullName",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "3966aa75-a14a-4e56-96ba-20927c02fcdb",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2129));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "4450e437-4eb2-4e0f-91dc-4f8fa395d2e1",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2126));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "4d231662-288d-4c6f-b90a-f95afc9937e5",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2134));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "4ee68c24-6ef3-4db2-b046-a666302c2d31",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2133));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "55f9445a-7a11-4902-a234-7f5365d1cdce",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2132));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "60bb0c20-1652-42bb-82d2-58efb10d442e",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2111));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "638edd84-e810-4073-b29c-125c549686d0",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2127));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "7177eedd-71d8-4aa7-85f6-caea03a2dd64",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2124));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "b75bf5b5-ff64-4357-8e2d-a6d125b495b8",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2128));

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "Id",
                keyValue: "e8f058b1-8e17-4cd3-b744-c96ed7438004",
                column: "PostCreatedTime",
                value: new DateTime(2023, 7, 21, 18, 28, 3, 710, DateTimeKind.Local).AddTicks(2131));
        }
    }
}
