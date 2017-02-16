-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema miristore
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `miristore` ;

-- -----------------------------------------------------
-- Schema miristore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `miristore` DEFAULT CHARACTER SET utf8 ;
USE `miristore` ;

-- -----------------------------------------------------
-- Table `miristore`.`product`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `miristore`.`product` ;

CREATE TABLE IF NOT EXISTS `miristore`.`product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NULL,
  `product_unit_sale_price` DECIMAL(10,2) NULL,
  `product_bar_code` VARCHAR(50) NULL,
  `product_real_price` VARCHAR(45) NULL,
  PRIMARY KEY (`product_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `miristore`.`sale`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `miristore`.`sale` ;

CREATE TABLE IF NOT EXISTS `miristore`.`sale` (
  `sale_id` INT NOT NULL AUTO_INCREMENT,
  `sale_date` DATE NULL,
  PRIMARY KEY (`sale_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `miristore`.`detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `miristore`.`detail` ;

CREATE TABLE IF NOT EXISTS `miristore`.`detail` (
  `sale_sale_id` INT NOT NULL,
  `product_product_id` INT NOT NULL,
  `quantity` VARCHAR(45) NOT NULL,
  `sale_price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`sale_sale_id`, `product_product_id`),
  INDEX `fk_datail_sale_idx` (`sale_sale_id` ASC),
  INDEX `fk_datail_product1_idx` (`product_product_id` ASC),
  CONSTRAINT `fk_datail_sale`
    FOREIGN KEY (`sale_sale_id`)
    REFERENCES `miristore`.`sale` (`sale_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_datail_product1`
    FOREIGN KEY (`product_product_id`)
    REFERENCES `miristore`.`product` (`product_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
