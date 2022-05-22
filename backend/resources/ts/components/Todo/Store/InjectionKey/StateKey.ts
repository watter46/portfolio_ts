import { InjectionKey } from "vue"
import { StateType } from "../../Functions/type"

export const key: InjectionKey<StateType> = Symbol('StateKey')
