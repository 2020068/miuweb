import React from 'react';

const ProgramList = () => {
  // program list (ex)
  const programs = [
    { id: 1, name: 'Academic Program' },
    { id: 2, name: 'LEI' },
    // add more programs
  ];

  return (
    <div>
      <h1>Programs</h1>
      <ul>
        {programs.map(program => (
          <li key={program.id}>
            <a href={`/programs/${program.id}`}>{program.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramList;
