export interface Root {
    chain: string
    exchange: string
    total: number
    cursor: string
    per_page: string
    results: Result[]
  }
  
  export interface Result {
    exchange: string
    update_at: string
    key: string
    name: string
    description?: string
    exchange_url: string
    external_url?: string
    banner_image_url: string
    featured_image_url?: string
    large_image_url?: string
    image_url: string
    chat_url: any
    discord_url?: string
    telegram_url: any
    twitter_username: any
    wiki_url: any
    instagram_username?: string
    stats: Stats
    contracts: Contract[]
  }
  
  export interface Stats {
    market_cap: number
    num_owners: number
    floor_price: number
    total_minted: number
    total_supply: number
    total_volume: number
    one_day_volume: number
    seven_day_volume: number
    thirty_day_volume: number
    one_day_volume_change: number
    seven_day_volume_change: number
    thirty_day_volume_change: number
    total_sales: number
    one_day_sales: number
    seven_day_sales: number
    thirty_day_sales: number
    total_average_price: number
    one_day_average_price: number
    seven_day_average_price: number
    thirty_day_average_price: number
  }
  
  export interface Contract {
    contract_address: string
  }
  