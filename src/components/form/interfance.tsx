interface Props {
  placeholder?: string[] | string
  allowClear?: boolean
  autoComplete?: string
  btnname?: string
  btntype?: "primary"
  className?: string
  loading?: boolean,
  value?: string | number,
  formtype?: "submit" | "reset"
}
export interface SchemasItem {
  type: string,
  props: Props,
  label?: string,
  name?: string,
  span?: number,
  onChange?(v: string | number): void,
  children?: any,
  ref?: any,
  value?: string | number
}
export interface SchemasProps {
  schemas: ObjectAny,
  initialValues?: any,
  form: any,
  onFinish(v: object): void,
  onFieldsChange?(v: object): void,
  onValuesChange?(v: object): void,
}
export interface ObjectAny {
  [propName: string
  ]: any;
}