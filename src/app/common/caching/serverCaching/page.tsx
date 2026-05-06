import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Server Caching'>
      <NoteItem>
        <p>3 подхода кеширования на сервере</p>
        <br />
        <p>Caching-aside</p>
        <br />
        <p>Write-through</p>
        <br />
        <p>Write-back</p>
      </NoteItem>
    </Note>
  );
}
