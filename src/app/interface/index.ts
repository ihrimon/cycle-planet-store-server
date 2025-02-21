export type TUserRole = 'admin' | 'customer';

export type TUserStatus = 'active' | 'blocked';

export type TCustomerStatus = 'in-progress' | 'blocked';

export type TCategory =
  | 'mountain'
  | 'road'
  | 'hybrid'
  | 'bmx'
  | 'electric'
  | 'gravel'
  | 'touring'
  | 'cyclocross'
  | 'cargo'
  | 'track'
  | 'kids';

export type TBrand =
  | 'trek'
  | 'specialized'
  | 'giant'
  | 'cannondale'
  | 'scott'
  | 'bianchi'
  | 'cervelo'
  | 'santa_cruz'
  | 'orbea'
  | 'merida';

export type TStock = 'in-stock' | 'out-stock';
