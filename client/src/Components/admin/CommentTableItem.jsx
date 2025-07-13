import React from 'react';
import { assets } from '../../assets/assets';

const CommentTableItem = ({ comment, fetchComments }) => {

    const{blog,createAt,_id} = comment;
    
  return (
    <tr>
      
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{comment.name}</td>
      <td className="px-6 py-4 max-w-sm text-sm text-gray-500">
        <p className="truncate" title={comment.content}>{comment.content}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className='inline-flex items-center gap-4'>
            {!comment.isApproved ? <img src={assets.tick_icon} className="w-5 h-5 cursor-pointer transition-transform hover:scale-110" /> : <p>Approved</p>}
            <img src={assets.bin_icon}  className='w-5 h-5 cursor-pointer transition-transform hover:scale-110'/>

        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;