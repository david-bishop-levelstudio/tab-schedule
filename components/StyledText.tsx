import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface IProps {
  children: string
  paddingVertical?: number
  fontSize?: number
  title?: boolean
  style?: {} | {}[]
}

const StyledText = ({ children, paddingVertical = 0, fontSize = 16, title, style }: IProps) => {

  const fontFamily = title ? 'Poppins_600SemiBold' : 'Teko_300Light'
  const textTransform = "none"

  return (
    <Text style={{ fontSize, paddingVertical, fontFamily, textTransform, ...style }}>{children}</Text>
  )
}

export default StyledText

const styles = StyleSheet.create({})
