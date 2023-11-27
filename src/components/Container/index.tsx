import { Grid ,GridProps} from '@mui/material'
import React from 'react'

interface Props extends GridProps {
    children:React.ReactNode
}

const Container = (props: Props) => {
    const {children,...rest} = props
    
  return (
    <Grid container {...rest} lg={9} md={12} xl={8}>
        {children}
    </Grid>
  )
}

export default Container