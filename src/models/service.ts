import { IconType } from 'react-icons'

export type IRouterProps = {
  isAuth: boolean
};

export interface IService {
  key: number
  path: string
  isMenu: boolean,
  component: any
  exact: boolean
  title: string,
  icon?: IconType,
  icon_mini?: IconType,
}

