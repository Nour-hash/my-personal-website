import React from 'react';
import './Skills.css'; // Add a separate CSS file for styling

function Skills() {

  const skillsData = {
    JavaScript: [
        { name: 'JavaScript', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
        { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'jQuery', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jquery/jquery-original.svg' },
        { name: 'Angular', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
    ],
    ML_DL: [
        { name: 'TensorFlow', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg' },
        { name: 'Keras', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg' },
        { name: 'PyTorch', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg' },
    ],
    BackEnd: [
        { name: 'Spring Boot', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg' },
        { name: 'Django', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg' },
        { name: 'Node.js', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    ],
    FrontEnd: [
        { name: 'Angular', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
        { name: 'React', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
        { name: 'Express', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
    ],
    CI_CD: [
        { name: 'Git', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
        { name: 'Maven', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg' },
        { name: 'Gradle', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Gradle_logo.svg/320px-Gradle_logo.svg.png' },
        { name: 'Docker', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
    ],
    Other: [
        { name: 'SQL', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
        { name: 'Database Design', url: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
        { name: 'Office 365', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Logo_Microsoft_Office_365_%282013-2019%29.svg/640px-Logo_Microsoft_Office_365_%282013-2019%29.svg.png' },
    ],
   
};

  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-container">
            {Object.keys(skillsData).map(category => (
                <div className="card" key={category}>
                    <div className="card-content">
                        <h4 className="brown-text light">{category.replace('_', '/')}</h4>
                        <div className="row text-center">
                            {skillsData[category].map(skill => (
                                <div className="col" key={skill.name}>
                                    <div className="icon-wrapper">
                                        <img alt={skill.name} src={skill.url} className="responsive-img" />
                                    </div>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Skills;
