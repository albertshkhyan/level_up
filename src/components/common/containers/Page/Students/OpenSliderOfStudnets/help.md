            <div className="StudentCard" key={this.props.id}>
            <div className="image-block image-centering"
            style = {{
                backgroundImage : `url(${this.props.imageOfStudents})`
            }}>

            <div onClick={this.openCoarousel} className="hidden-block flexible">
                <span className="Icon">
                    <img src={searchIconSvg} alt="searchIcon"/>
                </span>
            </div>

            </div>

            <div className="info-block flexible vertical aCenter">
                <h3>{this.props.name}</h3>
                <p className="course">{this.props.whatStudy}</p>
            </div>
        </div>