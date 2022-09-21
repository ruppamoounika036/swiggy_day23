create database SwiggyTeamA;
use SwiggyTeamA;
create table LoginDetails
(
  UserId int identity(1,1) primary key,
  FirstName varchar(200),
  LastName varchar(200),
  FullName as FirstName + ' '+LastName,
  Password varchar(MAX),
  Role varchar(100)
);

create table RegionDetails
(
 RegionId int identity(1,1) primary key,
 Userid int references LoginDetails(UserId) on delete cascade on update cascade unique,
 RegionName varchar(200)
);

create table RestuarantDetails
(
 RestuarantId int identity(1,1) primary key,
 RestuarantName varchar(200),
 RegionAdminId int references RegionDetails(Userid) on delete cascade on update cascade
);


create table FoodCategory
(
 FoodCategoryId int identity(1,1) primary key,
 FoodCategory varchar(200)
);

insert into FoodCategory (FoodCategory) values('Soups'),('ChickenStarter'),('Salads'),('Veg Starter'),('Biryani')
,('Rotis'),('Deserts');

select * from FoodCategory;
create table ItemDetails
(
ItemId int identity(1,1) primary key,
ItemName varchar(200),
ItemStock int,
ItemPrice float(45),
CategoryId int references FoodCategory(FoodCategoryId) on delete cascade on update cascade,
RestuarantId int references RestuarantDetails(RestuarantId)
);

create table CartDetails
(
 CartId int identity(1,1) primary key,
 UserId int references LoginDetails(UserId) on delete cascade on update cascade,
 OrderedItemId int references ItemDetails(ItemId) on delete cascade on update cascade,
 OrderedItemQuantity int,
 OrderedItemName varchar(200),
 OrderedItemPrice float(45),
 OrderId int
);

create table UserOrders
(  
   Orderid int identity(1,1) primary key,
   Userid int references LoginDetails(UserId) on delete cascade on update cascade,
   Grandtotal float(45)
);
