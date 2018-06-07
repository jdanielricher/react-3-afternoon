render() {
const { editing, showMasterMenu } = this.state;
const { text, date } = this.props;

return (
  <section className="Post__parent" onClick={this.hideMasterMenu}>
    <div className="Post__master-controls">
      <MasterControlIcon onClick={this.toggleMasterMenu} />

      <div
        className="Post__master-menu"
        style={{ display: showMasterMenu ? "flex" : "none" }}
      >
        <span onClick={this.showEdit}>Edit</span>
        <span onClick={() => deletePostFn(id)}>Delete</span>
        <span onClick={this.showEdit}>Edit</span>
        <span>Delete</span>
      </div>
    </div>

    <div className="Post__meta-data">
      <div className="Post__profile-picture">
        <ProfileIcon />
      </div>

      <span className="Post__name">DevMountain</span>
      <span className="Post__handle">@DevMountain</span>

      <span className="Post__date">- {date}</span>
    </div>

    <div className="Post__content">
      {editing ? (
        <Edit
          text={text}
          id={id}
          hideEdit={this.hideEdit}
          updatePostFn={updatePostFn}
        />
      ) : (
        <span className="Post__text">{text}</span>
      )}
    </div>
    <div className="Post__user-controls">
      <ReplyIcon className="Post__control-icon" />
      <FavoriteIcon className="Post__control-icon" />
      <MessageIcon className="Post__control-icon" />
    </div>
  </section>
    );
  }
}


