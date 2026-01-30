const db = []; // “banco” em memória

function listProducts() {
  return db;
}

function createProduct(payload) {
  // 1) Validar se veio um objeto
  if (!payload || typeof payload !== "object") {
    return { ok: false, error: "Payload inválido" };
  }

  const { name, brand, price } = payload;

  // 2) Validar name
  if (typeof name !== "string" || name.trim().length < 3) {
    return { ok: false, error: "name é obrigatório e precisa ter no mínimo 3 letras" };
  }

  // 3) Validar brand
  if (typeof brand !== "string" || brand.trim().length === 0) {
    return { ok: false, error: "brand é obrigatório" };
  }

  // 4) Validar price
  if (typeof price !== "number" || Number.isNaN(price) || price <= 0) {
    return { ok: false, error: "price precisa ser um número maior que 0" };
  }

  // 5) Criar produto (com id simples)
  const product = {
    id: db.length + 1,
    name: name.trim(),
    brand: brand.trim(),
    price
  };

  db.push(product);

  return { ok: true, product };
}

module.exports = { listProducts, createProduct };
