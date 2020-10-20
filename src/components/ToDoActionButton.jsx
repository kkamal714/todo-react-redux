import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import { Box } from '@material-ui/core'
import Icon from './Icon'

const ToDoActionButton = ({ TodoId }) => {
	return (
		<Box display='flex' justifyContent='flex-end'>
			<Icon icon={<EditIcon />} action='edit' id={TodoId} />
			<Icon icon={<DeleteIcon />} action='delete' id={TodoId} />
			<Icon icon={<DoneAllIcon />} action='done' id={TodoId} />
		</Box>
	)
}

export default ToDoActionButton