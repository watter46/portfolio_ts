import { InjectionKey } from "vue"
import { StateType } from "../type"

export const key: InjectionKey<StateType> = Symbol('StateKey')
