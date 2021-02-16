import React from 'react';

function DateFecha(props) {
  const d = new Date();
  const ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('es', { month: 'long' }).format(d);
  const dad = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(d);
    const da = new Intl.DateTimeFormat('es', { weekday: "long" }).format(d);

  return (
    <div data-size="wide" data-role="tile" className="text-center cli-card">
      <h2>{da.charAt(0).toUpperCase().concat(da.slice(1))} {dad}</h2><br/>
      {mo.charAt(0).toUpperCase().concat(mo.slice(1))} de {ye}
    </div>
  );
}

export default DateFecha;
