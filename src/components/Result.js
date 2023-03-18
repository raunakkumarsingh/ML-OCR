import React from 'react'

export default function Result(props) {
  const {note}=props;
  return (
<div className="chat-message-right mb-4">
<div>
<h5 className="bold medium text-nowrap mt-2">{note.que}</h5>
</div>
<div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
{note.ans}
</div>
</div>
  )
}
