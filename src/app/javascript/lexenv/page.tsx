import React from 'react';
import { Note, NoteItem } from '@/shared/ui/Note';

export default function Template() {
  return (
    <Note title='Лексическое окружение'>
      <NoteItem>
        <p>
          У каждого скрипта, блока кода, функции - имеется связанное с ней
          лексическое окружение. Это скрытый объект [LexicalEnvironment]
          <br />
          Этот объект хранит все переменные в качестве свойств, так же он хранит
          ссылку на внешнее лексическое окружение.
        </p>
      </NoteItem>
    </Note>
  );
}
