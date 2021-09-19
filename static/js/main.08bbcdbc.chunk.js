(this["webpackJsonpmovie-cards-library-stateful"]=this["webpackJsonpmovie-cards-library-stateful"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),o=a(1),s=a(2),c=a(4),u=a(3),m=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"movie-card-header"},r.a.createElement("h1",{className:"page-title"},"Movie Cards Library"))}}]),a}(r.a.Component),h=a(5),d=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.rating;return r.a.createElement("div",{className:"movie-card-rating","data-testid":"rating"},r.a.createElement("span",{className:"rating"},e))}}]),a}(r.a.Component);d.defaultProps={rating:0};var p=d,v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.movie,t=e.title,a=e.subtitle,n=e.storyline,i=e.rating,l=e.imagePath;return r.a.createElement("div",{className:"movie-card","data-testid":"movie-card"},r.a.createElement("img",{alt:"Movie Cover",className:"movie-card-image",src:l}),r.a.createElement("div",{className:"movie-card-body"},r.a.createElement("h4",{"data-testid":"movie-card-title",className:"movie-card-title"},t),r.a.createElement("h5",{className:"movie-card-subtitle"},a),r.a.createElement("p",{className:"movie-card-storyline"},n)),r.a.createElement(p,{rating:i}))}}]),a}(r.a.Component);r.a.Component,a(14);var g=function(e){var t=e.value,a=e.onChange,n=e.label,i=e.testLabelID,l=e.testInputID,o=e.name;return r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:o,"data-testid":i,className:"input-label"},n,r.a.createElement("input",{type:"text",name:o,value:t,onChange:a,"data-testid":l,className:"input-text"})))};a(15);var b=function(e){var t=e.checked,a=e.onChange;return r.a.createElement("label",{htmlFor:"favorites","data-testid":"checkbox-input-label",className:"checkbox-label"},"Mostrar somente favoritos:",r.a.createElement("input",{type:"checkbox",name:"favorites",checked:t,className:"checkbox-input",onChange:a,"data-testid":"checkbox-input"}))};a(16);var f=function(e){var t=e.label,a=e.value,n=e.onChange,i=e.options,l=e.selectTestID,o=e.labelTestID,s=e.optionTestID,c=e.name;return r.a.createElement("label",{htmlFor:"select-input","data-testid":o},t,r.a.createElement("select",{name:c,value:a,onChange:n,"data-testid":l,className:"select-input"},i&&i.map((function(e){return r.a.createElement("option",{key:e.value,"data-testid":s,value:e.value},e.name)}))))},k=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.searchText,a=e.onSearchTextChange,n=e.bookmarkedOnly,i=e.onBookmarkedChange,l=e.selectedGenre,o=e.onSelectedGenreChange;return r.a.createElement("form",{action:"","data-testid":"search-bar-form"},r.a.createElement(g,{value:t,onChange:a,label:"Inclui o texto:",testInputID:"text-input",testLabelID:"text-input-label",name:"searchInput"}),r.a.createElement(b,{checked:n,onChange:i}),r.a.createElement("div",null,r.a.createElement(f,{value:l,onChange:o,options:[{value:"",name:"Todos"},{value:"action",name:"A\xe7\xe3o"},{value:"comedy",name:"Com\xe9dia"},{value:"thriller",name:"Suspense"}],name:"select-input",label:"Filtrar por g\xeanero:",selectTestID:"select-input",labelTestID:"select-input-label",optionTestID:"select-option"})))}}]),a}(n.Component),y=a(8);var E=function(e){var t=e.onChange,a=e.value;return r.a.createElement("label",{htmlFor:"storyline","data-testid":"storyline-input-label"},"Sinopse",r.a.createElement("textarea",{name:"storyline",cols:"30",rows:"10","data-testid":"storyline-input",onChange:t,value:a}))};function O(e){var t=e.value,a=e.onChange;return r.a.createElement("label",{htmlFor:"number-input","data-testid":"rating-input-label"},"Avalia\xe7\xe3o",r.a.createElement("input",{type:"number",name:"rating","data-testid":"rating-input",value:t,onChange:a}))}O.defaultProps={value:0};var C=O,j=(a(17),n.Component,a(18),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(o.a)(this,a),n=t.call(this,e);var r=e.movies;return n.state={searchText:"",bookmarkedOnly:!1,genre:"",movies:r},n.handleSearchInput=n.handleSearchInput.bind(Object(h.a)(n)),n.toggleBookmark=n.toggleBookmark.bind(Object(h.a)(n)),n.handleGenderInput=n.handleGenderInput.bind(Object(h.a)(n)),n.filter=n.filter.bind(Object(h.a)(n)),n.addMovie=n.addMovie.bind(Object(h.a)(n)),n}return Object(s.a)(a,[{key:"handleSearchInput",value:function(e){var t=e.target.value;this.setState({searchText:t})}},{key:"handleGenderInput",value:function(e){var t=e.target.value;this.setState({genre:t})}},{key:"addMovie",value:function(e){var t=e.subtitle,a={title:e.title,subtitle:t,imagePath:e.imagePath,storyline:e.storyline,rating:e.rating,genre:e.genre},n=this.state.movies;this.setState({movies:n.concat(a)})}},{key:"toggleBookmark",value:function(){this.state.bookmarkedOnly?this.setState({bookmarkedOnly:!1}):this.setState({bookmarkedOnly:!0})}},{key:"filter",value:function(){var e=this.state,t=e.movies,a=e.searchText,n=e.bookmarkedOnly,r=e.genre,i=t;return a.length>1&&(i=i.filter((function(e){return e.title.includes(a)||e.subtitle.includes(a)||e.storyline.includes(a)}))),!0===n&&(i=i.filter((function(e){return!0===e.bookmarked}))),r.length>1&&(i=i.filter((function(e){return e.genre===r}))),i}},{key:"render",value:function(){var e=this.state,t=e.searchText,a=e.genre,n=e.bookmarkedOnly;this.filter();return r.a.createElement("div",{className:"movie-page"},r.a.createElement("h2",null," My awesome movie library "),r.a.createElement(k,{searchText:t,onSearchTextChange:this.handleSearchInput,bookmarkedOnly:n,onBookmarkedChange:this.toggleBookmark,selectedGenre:a,onSelectedGenreChange:this.handleGenderInput}))}}]),a}(n.Component)),I=[{title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];a(19);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(j,{movies:I}))};a(20);l.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.08bbcdbc.chunk.js.map