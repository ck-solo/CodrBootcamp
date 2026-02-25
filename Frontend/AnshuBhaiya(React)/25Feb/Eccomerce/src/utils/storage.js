export const CART_STORAGE_KEY = 'v_shop_cart'
export const WISHLIST_STORAGE_KEY = 'v_shop_wishlist'
export const ORDERS_STORAGE_KEY = 'v_shop_orders'

export const getStorageItem = (key) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : []
  } catch (error) {
    console.error("Storage error", error)
    return []
  }
}

export const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const calculateTotal = (cartItems) => {
  let total = 0
  let count = 0

  cartItems.forEach(item => {
    total += item.product.price * item.quantity
    count += item.quantity
  })

  return { total, count }
}