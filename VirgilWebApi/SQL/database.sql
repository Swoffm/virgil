USE [master]

IF db_id('Virgil') IS NULl
  CREATE DATABASE [Virgil]
GO

USE [Virgil]
GO

DROP TABLE IF EXISTS [UserCollection];
DROP TABLE IF EXISTS [BookCollection];
DROP TABLE IF EXISTS [UserData];
DROP TABLE IF EXISTS [Book];
DROP TABLE IF EXISTS [Category];
DROP TABLE IF EXISTS [Collection];




Create Table [UserData]
(
	[Id] integer PRIMARY KEY IDENTITY,
	[Username] nvarchar(25) NOT NULL
)

CREATE TABLE [Collection]
(
	[Id] integer PRIMARY KEY IDENTITY,
	[Name] varchar(50) NOT NULL
)

CREATE TABLE [Category]
(
	[Id] integer PRIMARY KEY IDENTITY,
	[UserId] integer NOT NULL,
	[Category] varchar(25) NOT NULL

	CONSTRAINT [FK_Category_UserId] FOREIGN KEY ([UserId]) REFERENCES [UserData] ([Id])
)

CREATE TABLE [Book]
(
	[Id] integer PRIMARY KEY IDENTITY,
	[BookName] varchar(50) NOT NULL,
	[UserId] integer NOT NULL,
	[BookLink] text NOT NULL,
	[Details] text NOT NULL,
	[CategoryId] integer NOT NULL

	CONSTRAINT [FK_Book_UserId] FOREIGN KEY ([UserId]) REFERENCES [UserData] ([Id]),
	CONSTRAINT [FK_Book_CategoryId] FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id])
)




CREATE TABLE [UserCollection]
(
	[Id] integer PRIMARY KEY IDENTITY,
	[UserId] integer NOT NULL,
	[CollectionId] integer NOT NULL

	CONSTRAINT [FK_UserCollection_CollectionId] FOREIGN KEY ([CollectionId]) REFERENCES [Collection] ([Id]),
	CONSTRAINT [FK_UserCollection_UserId] FOREIGN KEY ([UserId]) REFERENCES [UserData] ([Id])

)


CREATE TABLE [BookCollection]
(
	[Id] integer PRIMARY KEY IDENTITY,
	[CollectionId] integer NOT NULL,
	[BookId] integer

	CONSTRAINT [FK_BookCollection_CollectionId] FOREIGN KEY ([CollectionId]) REFERENCES [Collection] ([Id]),
	CONSTRAINT [FK_BookCollection_BookId] FOREIGN KEY ([BookId]) REFERENCES [Book] ([Id])
)