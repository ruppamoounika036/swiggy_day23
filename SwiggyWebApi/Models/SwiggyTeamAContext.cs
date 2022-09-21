using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace SwiggyWebApi.Models
{
    public partial class SwiggyteamAContext : DbContext
    {
        public SwiggyteamAContext()
        {
        }

        public SwiggyteamAContext(DbContextOptions<SwiggyteamAContext> options)
            : base(options)
        {
        }

        public virtual DbSet<CartDetail> CartDetails { get; set; } = null!;
        public virtual DbSet<FoodCategory> FoodCategories { get; set; } = null!;
        public virtual DbSet<ItemDetail> ItemDetails { get; set; } = null!;
        public virtual DbSet<LoginDetail> LoginDetails { get; set; } = null!;
        public virtual DbSet<RegionDetail> RegionDetails { get; set; } = null!;
        public virtual DbSet<RestuarantDetail> RestuarantDetails { get; set; } = null!;
        public virtual DbSet<UpComingRestaurant> UpComingRestaurants { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=TGU1SER15;Initial Catalog=SwiggyteamA;User Id=sa;Password=Dbase@1234");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CartDetail>(entity =>
            {
                entity.HasKey(e => e.CartId)
                    .HasName("PK__CartDeta__51BCD7B74F6FBD43");

                entity.Property(e => e.OrderedItemName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.OrderedItem)
                    .WithMany(p => p.CartDetails)
                    .HasForeignKey(d => d.OrderedItemId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__CartDetai__Order__5441852A");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.CartDetails)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__CartDetai__UserI__534D60F1");
            });

            modelBuilder.Entity<FoodCategory>(entity =>
            {
                entity.ToTable("FoodCategory");

                entity.Property(e => e.FoodCategory1)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("FoodCategory");
            });

            modelBuilder.Entity<ItemDetail>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PK__ItemDeta__727E838B81547445");

                entity.Property(e => e.ItemName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.ItemDetails)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__ItemDetai__Categ__4F7CD00D");

                entity.HasOne(d => d.Restuarant)
                    .WithMany(p => p.ItemDetails)
                    .HasForeignKey(d => d.RestuarantId)
                    .HasConstraintName("FK__ItemDetai__Restu__5070F446");
            });

            modelBuilder.Entity<LoginDetail>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PK__LoginDet__1788CC4CD265CA96");

                entity.Property(e => e.Email)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.FullName)
                    .HasMaxLength(401)
                    .IsUnicode(false)
                    .HasComputedColumnSql("(([FirstName]+' ')+[LastName])", false);

                entity.Property(e => e.LastName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasMaxLength(25)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<RegionDetail>(entity =>
            {
                entity.HasKey(e => e.RegionId)
                    .HasName("PK__RegionDe__ACD844A3D7752DEF");

                entity.HasIndex(e => e.Userid, "UQ__RegionDe__1797D025A7CF7F0A")
                    .IsUnique();

                entity.Property(e => e.RegionName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Userid).IsRequired();

                entity.HasOne(d => d.User)
                    .WithOne(p => p.RegionDetail)
                    .HasForeignKey<RegionDetail>(d => d.Userid)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__RegionDet__Useri__49C3F6B7");
            });

            modelBuilder.Entity<RestuarantDetail>(entity =>
            {
                entity.HasKey(e => e.RestuarantId)
                    .HasName("PK__Restuara__C894278967754F0B");

                entity.Property(e => e.RestuarantName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.RegionAdmin)
                    .WithMany(p => p.RestuarantDetails)
                    .HasPrincipalKey(p => p.Userid)
                    .HasForeignKey(d => d.RegionAdminId)
                    .OnDelete(DeleteBehavior.Cascade)
                    .HasConstraintName("FK__Restuaran__Regio__4CA06362");
            });

            modelBuilder.Entity<UpComingRestaurant>(entity =>
            {
                entity.HasKey(e => e.UrestId)
                    .HasName("PK__UpComing__D601969080CB623C");

                entity.Property(e => e.UrestId).HasColumnName("URestId");

                entity.Property(e => e.Dateoflaunch).HasColumnType("date");

                entity.Property(e => e.Region)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Restaurantname)
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
