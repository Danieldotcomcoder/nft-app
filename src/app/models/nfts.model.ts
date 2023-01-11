export interface Root {
    chain: string
    total: number
    cursor: string
    per_page: string
    results: Result[]
  }
  
  export interface Result {
    token_type: string
    contract_address: string
    id: string
    token_name: string
    token_description?: string
    uri: string
    metadata: Metadata
    total_transfers: number
    minted_at?: string
    total_current_owners: number
    current_owners: CurrentOwner[]
    recent_price?: RecentPrice
    cached_videos: any
    cached_images?: CachedImages
  }
  
  export interface Metadata {
    image: string
    owner?: string
    title?: string
    api_u_r_l?: string
    symbol?: string
    address?: string
    gasless?: boolean
    token_id?: string
    file_key?: string
    subtitle?: string
    attributes?: Attribute[]
    resellable?: boolean
    auction_type?: string
    animation_url?: string
    auction_length?: number
    edition_total?: number
    edition_number?: number
    royalty_amount?: number
    original_creator?: string
    copyright_transfer?: boolean
    dna?: string
    date?: number
    edition?: number
    external_url?: string
    url?: string
    image_url?: string
    name_length?: number
    segment_length?: number
    version: any
    is_normalized?: boolean
    background_image?: string
    compiler?: string
    video?: string
    created_by?: string
    bpm: any
    key: any
    isrc: any
    tags: any
    genre?: string
    artist?: string
    lyrics: any
    artwork?: Artwork
    credits: any
    license?: string
    project: any
    duration?: number
    mime_type?: string
    publisher: any
    visualizer: any
    record_label: any
    track_number?: number
    lossless_audio?: string
    location_created?: string
    nft_serial_number?: number
    original_release_date: any
    properties?: Properties
  }
  
  export interface Attribute {
    value: any
    trait_type?: string
    display_type?: string
    max_value?: number
  }
  
  export interface Artwork {
    nft: any
    uri: string
    mime_type: string
  }
  
  export interface Properties {
    name: string
    number: number
  }
  
  export interface CurrentOwner {
    address: string
    quantity: string
  }
  
  export interface RecentPrice {
    contract_address: string
    id: string
    hash: string
    hash_nft_count: string
    from_address: string
    to_address: string
    date: string
    quantity: string
    price?: string
    price_currency?: string
    price_usd?: string
    currency: Currency[]
    erc20_transfers: Erc20Transfer[]
  }
  
  export interface Currency {
    symbol: string
    name: string
    decimals: number
    contract_address: any
    from_address: any
    to_address: any
    price: string
  }
  
  export interface Erc20Transfer {
    symbol?: string
    name?: string
    decimals?: number
    contract_address: string
    from_address: string
    to_address: string
    price: string
  }
  
  export interface CachedImages {
    tiny_100_100: string
    small_250_250: string
    medium_500_500: string
    large_1000_1000: string
    original: string
  }
  