import db from "../db";

// Category model
export interface Category {
  id: number;
  name: string;
}

export const categoryTable = 'category';

export const createCategoryTable = async () => {
  const exists = await db.schema.hasTable(categoryTable);
  if (!exists) {
    return db.schema.createTable(categoryTable, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.timestamps(true, true);
      console.log("success");
    });
  }
};

// Size model
export interface Size {
  id: number;
  name: string;
  quantity: number;
  product_id: number;
}

export const sizeTable = 'size';

export const createSizeTable = async () => {
  const exists = await db.schema.hasTable(sizeTable);
  if (!exists) {
    return db.schema.createTable(sizeTable, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('quantity').notNullable();
      table.integer('product_id').unsigned().references('id').inTable('product');
      table.timestamps(true, true);
    });
  }
};

// Color model
export interface Color {
  id: number;
  name: string;
  quantity: number;
  product_id: number;
}

export const colorTable = 'color';

export const createColorTable = async () => {
  const exists = await db.schema.hasTable(colorTable);
  if (!exists) {
    return db.schema.createTable(colorTable, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('quantity').notNullable();
      table.integer('product_id').unsigned().references('id').inTable('product');
      table.timestamps(true, true);
    });
  }
};



enum Status {
  AVAILABLE = "Available",
  UPCOMING = "Upcoming",
  NOT_AVAILABLE = "Not Available",
}

// Product model
export interface Product {
  id: number;
  name: string;
  status: Status;
  description: string;
  price: number;

}

export const productTable = 'product';

export const createProductTable = async () => {
  const exists = await db.schema.hasTable(productTable);
  if (!exists) {
    return db.schema.createTable(productTable, (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.enum('staus', Object.values(Status)).notNullable();
      table.timestamps(true, true);
    });
  }
};

export const createProductCategoryTable = async () => {
  const exists = await db.schema.hasTable('product_category');
  if (!exists) {
    return db.schema.createTable('product_category', (table) => {
      table.increments('id').primary();
      table.integer('product_id').unsigned().references('id').inTable('product');
      table.integer('category_id').unsigned().references('id').inTable('category');
      table.timestamps(true, true);
    });
  }
};

(async() => {
  createSizeTable();
  createColorTable();
  createProductCategoryTable();
  createProductTable();
})();
