import { useState, useEffect } from "react"
import { 
  CART_STORAGE_KEY,
  getStorageItem,
  setStorageItem
} from "../utils/storage"

export const useCart = () => {

  const [cartItems, setCartItems] = useState(() =>
    getStorageItem(CART_STORAGE_KEY)
  )

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    setStorageItem(CART_STORAGE_KEY, cartItems)
  }, [cartItems])


  // ✅ ADD TO CART
  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.product.id === product.id
      )

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { product, quantity: 1 }]
    })
  }


  // ✅ REMOVE ITEM
  const removeFromCart = (productId) => {
    setCartItems(prev =>
      prev.filter(item => item.product.id !== productId)
    )
  }


  // ✅ UPDATE QUANTITY
  const updateQty = (productId, delta) => {
    setCartItems(prev =>
      prev.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta
          return newQty <= 0
            ? { ...item, quantity: newQty }
            : item
        }
        return item
      })
    )
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQty
  }
}