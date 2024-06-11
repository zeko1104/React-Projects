const data = [
  {
    id: "1",
    question: "React nədir və onun əsas xüsusiyyətləri hansılardır?",
    answer: `
        React, Facebook tərəfindən yaradılmış və saxlanılan bir JavaScript kitabxanasıdır. Onun əsas xüsusiyyətləri:
        - **Component-based Architecture**: React, istifadəçi interfeyslərini komponentlərə bölməklə təşkil edir, bu da kodun təkrar istifadəsini və oxunaqlığını artırır.
        `,
  },
  {
    id: "2",
    question:
      "Component lifecycle metodları nədir və onların istifadəsi necədir?",
    answer: `
        React komponentlərinin həyat dövrü metodları, komponentlərin ömrü boyunca müəyyən məqamları idarə etməyə imkan verir. Əsas metodlar:
        - **componentDidMount**: Komponent DOM-a əlavə edildikdən sonra çağrılır.
        `,
  },
  {
    id: "3",
    question: "State və Props arasındakı fərq nədir?",
    answer: `
        **State** komponentin öz daxili məlumatlarını idarə etdiyi bir obyektidir və dəyişikliklər komponentin özündə baş verir. **Props** isə valideyn komponentdən uşaq komponentə ötürülən və dəyişdirilməyən məlumatlardır. 
        - **State**: Komponentin daxilində təyin edilir və dəyişdirilə bilər.
        - **Props**: Komponentlər arasında məlumat ötürülməsi üçün istifadə olunur və dəyişdirilməzdir.
        `,
  },
  {
    id: "4",
    question: "Hooks nədir və hansı hallarda istifadə olunur?",
    answer: `
        Hooks, funksional komponentlərdə state və digər React xüsusiyyətlərini istifadə etməyə imkan verir. Əsas Hooks:
        - **useState**: State dəyişənləri əlavə etməyə imkan verir.
        `,
  },
  {
    id: "5",
    question: "Context API nədir və hansı hallarda istifadə olunur?",
    answer: `
        Context API, komponent ağacında prop drilling olmadan məlumat paylaşmağa imkan verən bir React xüsusiyyətidir. Bu, xüsusilə böyük komponent ağaclarında məlumatın bir neçə səviyyə aşağı ötürülməsini asanlaşdırır. Context API istifadə edilən hallar:
        - Tema idarəetməsi (qaranlıq və işıqlı rejimlər).
        `,
  },
];

export default data;
