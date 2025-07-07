import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

function About() {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="about">
      <h2>Nyatet</h2>
      {locale === "id" ? (
        <p>
          Aplikasi catatan ini terlahir dari submission kelas "Belajar Fundamental Aplikasi Web dengan React" di Dicoding.  
          Fungsinya? Ya jelas buat nyatet hal-hal penting... atau nggak penting juga boleh, asal jangan nyatet utang doang.  
          Fitur-fitur seperti bikin catatan, liat-liat ulang, arsipin, sampe hapus juga ada.
          Dibalut dengan nuansa dark mode biar kelihatan niat dan agak keren dikit.  
          Intinya, aplikasi ini dibikin pake React, dengan penuh cinta🔥
        </p>
      ) : (
        <p>
          This note-taking app was created as part of the submission for the
          "Belajar Fundamental Aplikasi Web dengan React" class on Dicoding.  
          Its function? Of course, to jot down important things... or even unimportant ones, as long as it's not just debts.  
          It comes with features like creating notes, reviewing them, archiving, and even deleting.  
          Wrapped in a dark mode theme to look serious and a bit cool.  
          In short, this app was built with React, and lots of love. 🔥
        </p>
      )}
    </section>
  );
}

export default About;
