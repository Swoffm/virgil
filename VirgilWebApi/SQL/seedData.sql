USE [Virgil];
GO


set identity_insert [UserData] on 
INSERT INTO [UserData] 
	([Id], [Username])
VALUES
		(1, 'Steve'),
		(2, 'Greg'),
		(3, 'Gavin'),
		(4, 'Blue')
set identity_insert [UserData] off



set identity_insert [Collection] on
INSERT INTO [Collection]
	([Id],[Name])
VALUES
	(1, 'Tacitus'),
	(2, 'Plutarch'),
	(3, 'Plato'),
	(4, 'Philisophy'),
	(5, 'Josephus'),
	(6, 'War'),
	(7, 'Rome')
set identity_insert [Collection] off




set identity_insert [Category] on
INSERT INTO [Category]
	([Id], [UserId], [Category])
VALUES
	(1, 3, 'history'),
	(2, 3, 'philosophy'),
	(3, 3, 'war')
set identity_insert [Category] off



